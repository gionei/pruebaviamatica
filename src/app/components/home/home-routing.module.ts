import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CartComponent } from '../cart/cart.component';
import { NewproductComponent } from '../newproduct/newproduct.component';
import { ProductsComponent } from '../products/products.component';
import { InvoiceComponent } from '../invoice/invoice.component';

const routes: Routes = [
    {path: '', component: HomeComponent , children: [
    {path: '', component: ProductsComponent},    
    {path: 'cart', component: CartComponent},
    {path: 'newproduct', component: NewproductComponent},
    {path: 'cart/invoice/:codigo', component: InvoiceComponent },
  ]}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }