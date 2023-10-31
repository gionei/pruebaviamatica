import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  private productList: any[] = [];
  private nextId: number = 21;

  constructor() { }
  
  getProducts(): any[] {
    return this.productList;
  }

  addProduct(product: any) {
    product.id = this.nextId; 
    this.nextId++;
    this.productList.push(product);
  }
}
