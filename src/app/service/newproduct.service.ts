import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewproductService {

  nuevoProducto: any = {
    title: '',
    price: null,
    description: '',
    image: '',
    category: '',
  };

  constructor() { }

  setNuevoProducto(producto: any) {
    this.nuevoProducto = producto;
  }

  getNuevoProducto() {
    return this.nuevoProducto;
  }
}