import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-mercado-pago-landing',
  templateUrl: './mercado-pago-landing.component.html',
  styleUrls: ['./mercado-pago-landing.component.css']
})
export class MercadoPagoLandingComponent implements OnInit{
  estado:any
  id:any
  urlTree:any
  correo=""
  data:any = []

  private sub: any;
  constructor(private router: Router, private clienteSevice: ClienteService) {
    var _id = localStorage.getItem('_id')
    var token = localStorage.getItem('token')
    this.urlTree = this.router.parseUrl(this.router.url);
     this.estado = this.urlTree.queryParams['collection_status'];
    this.id = this.urlTree.queryParams['payment_id'];
    this.clienteSevice.mercadoPagoPedirData(this.id).subscribe(res=>{
      
      this.correo = res.payer.email
    })

    // this.clienteSevice.actualizar_compra_cliente(_id, token)    

 
 };

  ngOnInit() {
     
   
  }


}
