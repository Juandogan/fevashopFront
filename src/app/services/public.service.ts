import { Injectable } from '@angular/core';
import { GLOBAL } from '../services/GLOBAL'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { JwtHelperService } from '@auth0/angular-jwt'



@Injectable({
  providedIn: 'root'
})
export class PublicService {

  public url
  constructor(private _http:HttpClient) { 
    this.url = GLOBAL.url
  } 

  pedir_productos_public():Observable<any> {
    let headers = new HttpHeaders().set('Content-Type','application/json')
    return this._http.get(this.url+'pedir_productos_public',{headers:headers})

  }


  pedir_un_producto_public(id:any):Observable<any> {
    let headers = new HttpHeaders().set('Content-Type','application/json')
    return this._http.get(this.url+'pedir_un_producto_public/'+id,{headers:headers})

  }
}
