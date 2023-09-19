import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { ObservablesService } from 'src/app/services/observables.service';
import { io } from 'socket.io-client'



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public socket = io('http://localhost:4201')  

token:any;
id:any;
user : any = undefined;
user_ls : any = {}
item = 0

constructor(private clienteService:ClienteService, private router:Router, private userObservable:ObservablesService){
  this.token = localStorage.getItem('token')
  this.id = localStorage.getItem('_id')

  if(localStorage.getItem('user_data')){
this.userObservable.buscador$.emit()
   this.user_ls = localStorage.getItem('user_data')
    this.user_ls = JSON.parse(this.user_ls)
    this.userObservable.buscador$.emit(this.user_ls) //observable Data Usuario
  }else{
    
    this.clienteService.obtener_cliente_public(this.id, this.token).subscribe(res=>{
      this.user = res.data
      localStorage.setItem('user_data',JSON.stringify(this.user))
      this.user_ls = localStorage.getItem('user_data')
      this.user_ls = JSON.parse(this.user_ls)
      this.userObservable.buscador$.emit(this.user_ls)  //observable Data Usuario
    })
    
   
    this.userObservable.buscador$.subscribe(res=>{
      this.user_ls = res
    })
    this.user_ls = undefined}

 
}

ngOnInit(): void {
  this.obtener_cliente_carrito()
  
  this.socket.on('new-carrito', (data:any) =>{
    console.log(data)
    this.obtener_cliente_carrito()
  })
  
  this.socket.on('new-carrito-add', (data:any) =>{
    
    this.obtener_cliente_carrito()
  })
}

obtener_cliente_carrito(){
  this.clienteService.obtener_cliente_carrito(this.id, this.token).subscribe(res=>{
    this.item = res.data.length
     console.log(this.item)
    //  this.calcular()
     

     
        })
}

cerrarSesion(){
  
    localStorage.clear()
    this.userObservable.buscador$.emit(undefined) 
    this.router.navigate(['/login'])

}


calcular(){}
}
