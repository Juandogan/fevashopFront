import { Component } from '@angular/core';
import { AdminService } from "../../services/admin.service";
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { ObservablesService } from 'src/app/services/observables.service';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {
  user :any ={}
  usuario :any ={}
  data = {email:'', password: ''}
  
  token:any
  
  
  constructor(private adminService: ClienteService, private _router:Router, private userObservable:ObservablesService){

this.token = localStorage.getItem('token')
if(this.token){
  this._router.navigate(['/'])
}

  }



  login(loginForm:any){
    
    if(loginForm.valid){
      console.log(this.user.email)
      this.data.email = this.user.email
         this.data.password = this.user.password
         this.adminService.login_cliente(this.data).subscribe(
          response=>{
              if(response.data == undefined){
                alert(response.message)
              }else {
                this.usuario = response.data
                localStorage.setItem('token', response.token)
                localStorage.setItem('_id', response.data._id)
                this.userObservable.buscador$.emit(this.usuario)
                this.adminService.obtener_cliente_public(response.data._id, response.token).subscribe(res=>{
                  console.log(res)
                })
                this._router.navigate(['/'])
              }          },
        
        )    
        
        }else {alert('error')}
      

      
      
}
}
