
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

constructor(private clienteService : ClienteService, private router:Router){}

  canActivate():any {
    if(this.clienteService.isAuthenticated()){
      return true
    }
    this.router.navigate(['/login']);
    return false

  }

}
