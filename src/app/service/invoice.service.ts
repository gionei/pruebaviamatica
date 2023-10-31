import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private factura: any;

  constructor() { }

  generarFactura(carrito: any[], total: number) {
    this.factura = {
      items: carrito,
      total: total,
      codigo: this.generarCodigoFactura()
    };
    return this.factura.codigo;
  }

  getFactura() {
    return this.factura;
  }

  private generarCodigoFactura(): string {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const longitudCodigo = 8;
    let codigo = '';
  
    for (let i = 0; i < longitudCodigo; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      codigo += caracteres.charAt(indiceAleatorio);
    }
  
    return codigo;
  }
}
