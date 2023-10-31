import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { ProductdataService } from 'src/app/service/productdata.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList: any[] = [];

  constructor(private api : ApiService, private router: Router, private productdataService: ProductdataService){

  }
  
  ngOnInit(): void {
    this.api.getProducts().subscribe((apiProducts) => {
      this.productList = apiProducts;
      const dataServiceProducts = this.productdataService.getProducts();
      this.productList = [...this.productList, ...dataServiceProducts];
    });
  }

  toggleSelection(item: any) {
    item.selected = !item.selected;
    console.log('ID seleccionado:', item.id);
    setTimeout(() => {
      if (item.selected) {
        this.router.navigate(['/details', item.id]);
      }
    }, 250);
  }
}
