import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: any[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0);
  private cartItemsSubject = new BehaviorSubject<any[]>([]);

  constructor() { }

  getCartCountObservable(): Observable<number> {
    return this.cartCountSubject.asObservable();
  }

  getCartItemsObservable(): Observable<any[]> {
    return this.cartItemsSubject.asObservable();
  }

  addToCart(product: any) {
    this.cart.push(product);
    this.updateCart();    
  }

  removeFromCart(product: any) {
    const index = this.cart.indexOf(product);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.updateCart();
    }
  }

  updateCart() {
    this.cartCountSubject.next(this.cart.length);
    this.cartItemsSubject.next([...this.cart]);
  }

  getCart() {
    return this.cart;
  }
  
  resetCart() {
    this.cart = [];
    this.updateCart();
  }

  isProductInCart(product: any): boolean {
    return this.cart.some((item) => item.id === product.id);
  }
}