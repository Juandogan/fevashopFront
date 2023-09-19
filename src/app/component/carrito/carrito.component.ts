import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { io } from 'socket.io-client'
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {    

  loading= true
  carrito:any 
  token :any
  id:any
  subtotal = 0
  total = 0
  public socket = io('http://localhost:4201')
  direccionEnvio:any
  cliente:any
  precioEnvio:any = 0 
  cantidad = 1 

  venta : any = {}
  dventa : Array<any> = []


constructor(private clientService:ClienteService){
this.token = localStorage.getItem('token');
this.id = localStorage.getItem('_id');

this.venta.cliente = this.id
this.venta.subtotal = 
this.socket.on
this.obtener_cliente_carrito()

  }


ngOnInit(){
  this.socket.on('new-carrito', (data:any) =>{
    this.obtener_cliente_carrito()
    
    
  })


  this.socket.on('new-carrito-add', (data:any) =>{
        this.obtener_cliente_carrito()
    
  })

  

  


}

obtener_cliente_carrito(){
    this.clientService.obtener_cliente_carrito(this.id, this.token).subscribe(res=>{
      
      this.carrito = res.data
      this.cliente = res.data[0].cliente
      
      this.carrito.forEach((element: any) =>{
        
        this.dventa.push({producto: element.producto._id,
        subtotal:element.producto.precio,
        variedad:element.variedad,
        cantidad:element.cantidad,
        cliente: this.id
        
      })
      
      this.cantidad = this.carrito[0].cantidad
      })
      
      
        this.calcular()
       
       
       this.pedirDirecciones()     
      
          })
  }

  calcular(){
    this.subtotal = 0
    
this.carrito.forEach((element: { producto: { precio: string; }; }) => {
    
  this.subtotal = this.subtotal + parseInt(element.producto.precio)})
  
  
  this.calcularTotal()

  }

  eliminar(id:any){
    this.clientService.eliminar_cliente_carrito(id, this.token).subscribe(res=>{
      
      this.socket.emit('delete-carrito', {data:res.data})
      this.obtener_cliente_carrito()
      
            alert('eliminado');  
            
   })}
  
  
   pedirDirecciones(){
    
    this.clientService.obtener_direccion_cliente(this.cliente, this.token).subscribe(res=>{
      this.direccionEnvio = res.data[0]
      this.venta.direccion = res.data[0]._id

      
console.log(this.venta)
    })
  }
  
  calcularTotal(){

  this.total = this.subtotal + this.precioEnvio
  this.venta.subtotal = this.total
  this.venta.envio_precio = parseInt(this.precioEnvio)
  this.venta.envio_titulo = 'Simple'
  this.venta.transaccion = "" /// reveer
  this.venta.detalles = this.dventa /// reveer poner debajo de confirmaciond de comprar  
  console.log(this.venta)

  }

  enviarMercadopago(){
    this.loading=false
    var total = Number(this.total)
    
    var items = [
      {
        title: 'FevaSHOP',
        quantity: 1,
        currency_id: 'ARS',
        unit_price: total
      },
  
       ]
    
    
    this.clientService.mercadoPago(this.id,items, this.token).subscribe(res2=>{

          this.venta.transaccion = String(res2.data.body.id)
 
      this.clientService.registro_compra_cliente(this.venta, this.token).subscribe(res=>{
                      this.loading = false
            window.location.href = res2.data.body.init_point
            
      }) 
      
    })

  }
  
  };
