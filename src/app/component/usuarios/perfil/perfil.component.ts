import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { ObservablesService } from 'src/app/services/observables.service';
import { AlertsService } from 'mk-magic-alerts';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  token:any
  id:any
  cliente:any = {}
  user:any = undefined
  user_lc :any = undefined
  password:any =""

  constructor(private clienteService:ClienteService, private userObserver:ObservablesService, private alert:AlertsService){
    this.token = localStorage.getItem('token');
    this.id = localStorage.getItem('_id');
    if(this.id){
      this.clienteService.obtener_cliente_public(this.id,this.token).subscribe(res=>{
                this.cliente = res.data
                
      })
    }
    if(this.token){
      this.clienteService.obtener_cliente_public(this.id,this.token).subscribe(res=>{
        this.user = res.data;
        localStorage.setItem('user_data', JSON.stringify(this.user))
        if(localStorage.getItem('user_data')){
          this.user_lc = localStorage.getItem('user_data')
          this.user_lc = JSON.parse(this.user_lc)
          
        }else{
          this.user_lc = undefined
        
        }
      })
    }


  }

  actualizar(x:any){
    if(x.valid){
      if(this.cliente.password !==""){
        this.cliente.password = this.password
        console.log(this.password)
      }
      
      this.clienteService.actualizar_perfil_cliente_public(this.id, this.cliente, this.token).subscribe(res=>{
        console.log(res)
        this.alert.showInfo('Datos actualizados!!',3000)
      })

    }else{
      this.alert.showError('Formulario incompleto',3000)
    }
  }
}
