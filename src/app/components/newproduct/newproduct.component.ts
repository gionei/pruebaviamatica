import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { NewproductService } from 'src/app/service/newproduct.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit{

  nuevoProducto: any = {
    title: '',
    price: null,
    description: '',
    image: '',
    category: ''
  }
  productoAgregado: boolean = false;

  constructor(private apiService:ApiService, private newproductService:NewproductService,
    private snackBar: MatSnackBar) { 

  }

  ngOnInit(): void {
    
  }

  agregarProducto(newProductForm: NgForm) {
    this.apiService.agregarProducto(this.nuevoProducto).subscribe(
      (productoAgregado) => {
        this.productoAgregado = true;
        this.mostrarSnackbar('Producto agregado correctamente');
        newProductForm.resetForm();
      },
      (error) => {
        console.error('Error al agregar el producto:', error);
        this.mostrarSnackbar('Error al agregar el producto');
      }
    );
  }
  mostrarSnackbar(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      horizontalPosition: 'center',
      duration: 5000,
    });
  }
}