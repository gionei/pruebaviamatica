import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ProductdataService } from 'src/app/service/productdata.service'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://fakestoreapi.com'
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private productList: any[] = [];

  constructor(private http: HttpClient, private productdataService: ProductdataService) { }

  getProductList(): any[] {
    return this.productList;
  }

  getProducts(){
    return this.http.get<any>(`${this.baseUrl}/products`)
      .pipe(map((res:any)=>{
      return res;
  }))
}

  getProductDetails(productId: number): Observable<any> {
    const url = `${this.baseUrl}/products/${productId}`;
    return this.http.get(url);
  }

  agregarProducto(nuevoProducto: any): Observable<any> {
    const url = `${this.baseUrl}/products`;
    return this.http.post(url, nuevoProducto, { headers: this.headers }).pipe(
      tap((productoAgregado) => {
        this.productList.push(productoAgregado);
        this.productdataService.addProduct(productoAgregado);
      })
    );
  }
}
