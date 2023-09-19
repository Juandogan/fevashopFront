import { Injectable } from '@angular/core';
import { GLOBAL } from '../services/GLOBAL'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams  } from "@angular/common/http";
import { JwtHelperService } from '@auth0/angular-jwt'
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';



@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  public url
  constructor(private _http:HttpClient) { 
    this.url = GLOBAL.url
  }    

  login_cliente(data:any):Observable<any> {  
    let headers = new HttpHeaders().set('Content-Type','application/json')
    return this._http.post(this.url+'login_cliente',data,{headers:headers})
  }

  obtener_cliente_public(id:any, token:any):Observable<any> {  
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token})
    return this._http.get(this.url+'obtener_cliente_public/'+id,{headers:headers})
  }

  actualizar_perfil_cliente_public(id:any,data:any, token:any):Observable<any> {  
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token})
    return this._http.put(this.url+'actualizar_perfil_cliente_public/'+id,data,{headers:headers})
  }

  isAuthenticated():boolean{
    const token = localStorage.getItem('token')
    if(!token){
      return false 
    }

    try {
      const helper = new JwtHelperService();
      var decodedToken = helper.decodeToken(token);
      console.log(decodedToken)
      if(!decodedToken){
        console.log('no valido');
        localStorage.removeItem('token')
        return false
      }
    } catch (error) {
      localStorage.removeItem('token');
      return false
    }

    return true
  }

  obtener_config_publico():Observable<any> {
    let headers = new HttpHeaders().set('Content-Type','application/json')
    return this._http.get(this.url+'obtener_config_publico',{headers:headers})

  }

  agregar_cliente_carrito(data:any, token:any):Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token})
    return this._http.post(this.url+'agregar_cliente_carrito',data,{headers:headers})

  }

  obtener_cliente_carrito(id:any, token:any):Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token})
    return this._http.get(this.url+'obtener_cliente_carrito/'+id,{headers:headers})

  }


  eliminar_cliente_carrito(id:any, token:any):Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token})
    return this._http.delete(this.url+'eliminar_cliente_carrito/'+id,{headers:headers})
  }

  registro_direccion_cliente(data:any, token:any):Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token})
    return this._http.post(this.url+'registro_direccion_cliente',data,{headers:headers})
  }

  registro_compra_cliente(data:any, token:any):Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token})
    return this._http.post(this.url+'registro_compra_cliente',data,{headers:headers})
  }

  
  obtener_direccion_cliente(id:any, token:any):Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token})
    return this._http.get(this.url+'obtener_direccion_cliente/'+id,{headers:headers})
  }



  

  mercadoPago(id:any,data:any, token:any):Observable<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token})
    return this._http.post('http://localhost:4201/crear_pago/',data,{headers:headers})
  }

  mercadoPagoPedirData(id:any): Observable<any> {

      const apiUrl = `https://api.mercadopago.com/v1/payments/${id}`;
      const accessToken = 'TEST-5320397938177144-090810-fc5039c3211eec496424e1a4b1c021d0-1474340392'; // Reemplaza con tu token de acceso
  
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${accessToken}`
      });
  
      return this._http.get(apiUrl, { headers });
    }
  }
      
  


