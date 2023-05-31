import { Component, OnInit } from '@angular/core';
import { OrderSiteService } from 'src/app/servico/order-site.service';
OrderSiteService

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent {
    constructor(private servico: OrderSiteService){}
    valores:any
    ngOnInit(): void {
      this.valores = this.servico. varDatails
    }   
}
