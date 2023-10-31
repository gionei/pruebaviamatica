import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit{

  product: any;
  isClicked = false;
  
  constructor(private route: ActivatedRoute, private api : ApiService, 
    private cartService: CartService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
    const productId = params['id'];
        
    this.api.getProductDetails(productId).subscribe((productDetails) => {
    this.product = productDetails;
    this.isClicked = this.cartService.isProductInCart(productDetails);
    console.log('Detalles del producto:', this.product);
      });
    },(error) => {
      console.error('Error al obtener los detalles del producto:', error);
    });
  }

  addToCart() {
    if (this.cartService.isProductInCart(this.product)) {
      this.cartService.removeFromCart(this.product);
      this.isClicked = false;
    } else {
      this.cartService.addToCart(this.product);
      this.isClicked = true;
    }
  }
  
  removeFromCart() {
    this.cartService.removeFromCart(this.product);
    this.isClicked = false;
  } 

  toggleCartState() {
    if (this.cartService.isProductInCart(this.product)) {
      this.cartService.removeFromCart(this.product);
      this.isClicked = false;
    } else {
      this.cartService.addToCart(this.product);
      this.isClicked = true;
    }
  }
}
