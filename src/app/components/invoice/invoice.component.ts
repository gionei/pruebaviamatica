import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit{

  factura: any;

  constructor(private invoiceService: InvoiceService){
    
  }
  
  ngOnInit(): void {
    this.factura = this.invoiceService.getFactura();
  }

}
