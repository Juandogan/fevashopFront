import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { PublicService } from 'src/app/services/public.service';
import { io } from 'socket.io-client'
@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css']
})
export class DetallesProductoComponent implements OnInit{
  loading = true
  producto : any = {}
  carrito : any = {}
  token:any
  cantidad_input = 1
  
  public socket = io('http://localhost:4201')


  constructor(private publicService:PublicService, private ruta:ActivatedRoute, private clienteService: ClienteService){ 
          this.token = localStorage.getItem('token')
          this.carrito.variedad = ''
    //pedir desde parametros
   
  }

  ngOnInit(): void {

    this.ruta.params.subscribe(res=>{
      let id = res['id']
      console.log(id)

      this.publicService.pedir_un_producto_public(id).subscribe(res=>{
        this.producto = res.data
        console.log(res)
        this.loading = false
    })
      
    })  }


    agregar_producto(){
      this.carrito.cantidad = this.cantidad_input
      if(this.carrito.variedad){
        if(this.carrito.cantidad <= this.producto.stock){
              let data = {
                producto: this.producto._id,
                cliente: localStorage.getItem('_id'),
                cantidad: this.carrito.cantidad,
                variedad: this.carrito.variedad
              }
              this.clienteService.agregar_cliente_carrito(data,this.token).subscribe(res=>{
                console.log(res)
                
                alert('se agrego el producto al carrito')
              })
              this.socket.emit('add-carrito-add',{data:true}
              
              )

        }else{
          alert('no hay stock')
        }

      }else{     alert('no hay seleccione variedad')}
}



}
