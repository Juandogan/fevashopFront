import { Component } from '@angular/core';
import { Alert } from 'mk-magic-alerts/lib/core/models/alert.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { ObservablesService } from 'src/app/services/observables.service';
import { AlertsService } from 'mk-magic-alerts';
import { distinct } from 'rxjs';
@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.component.html',
  styleUrls: ['./direcciones.component.css']
})
export class DireccionesComponent {
  
  token:any
  id:any
  cliente:any = {}
  user:any = undefined
  user_lc :any = undefined
  password:any =""
  direccion:any = {
    pais:''
  }

  direcciones:any

  constructor(private clienteService:ClienteService, private userObserver:ObservablesService, private alert:AlertsService){
    
    this.token = localStorage.getItem('token');
    this.id = localStorage.getItem('_id');
    if(this.id){
      this.clienteService.obtener_cliente_public(this.id,this.token).subscribe(res=>{
                this.cliente = res.data
                
      })
      this.obtenerDirecciones()
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

  obtenerDirecciones(){
    this.clienteService.obtener_direccion_cliente(this.id,this.token).subscribe(res=>{
      this.direccion = res.data[0]
      
      console.log(res.data[0],'hola0')
    })
  }


  registrar(registroForm:any){
if(registroForm.valid){
  let data = { 
    cliente: localStorage.getItem('_id'),
    destinatario: this.direccion.destinatario,      
    dni: this.direccion.dni,
    zip:'test',
    direccion: this.direccion.direccion,    
    pais:this.direccion.pais,
    provincia: this.direccion.provincia,
    municipio:'test',
    localidad:'test',
    region: this.direccion.region,
    telefono: this.direccion.telefono,
    principal : 'test',   
  }
  console.log(data)
  this.clienteService.registro_direccion_cliente(data,this.token).subscribe(res=>{
    console.log(res)
    this.alert.showError('Actualizado')
  }) 
  

}else{
this.alert.showError('Formulario Incompleto')

}
 


  }
}
