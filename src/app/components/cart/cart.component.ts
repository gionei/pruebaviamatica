import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { InvoiceService } from 'src/app/service/invoice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  cartTotal: number = 0;
  isCartEmpty: boolean = true;

  constructor(private cartService: CartService,  private invoiceService: InvoiceService,
    private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    this.calculateCartTotal();
    this.isCartEmpty = this.cartItems.length === 0;
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
    this.cartItems = this.cartService.getCart();
    this.calculateCartTotal();
  }

  calculateCartTotal() {
    this.cartTotal = this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  generarFactura() {
    const codeInvoice = this.invoiceService.generarFactura(this.cartItems, this.cartTotal);
    this.cartService.resetCart();
    this.cartItems = [];
    this.cartTotal = 0;    
    this.router.navigate(['/home/cart/invoice', codeInvoice]);
  }
}