import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './component/crear-usuario/crear-usuario.component';
import { MainComponent } from './component/main/main.component';
import { PerfilComponent } from './component/usuarios/perfil/perfil.component';
import { authGuard } from './guard/auth.guard';
import { DetallesProductoComponent } from './component/productos/detalles-producto/detalles-producto.component';
import { CarritoComponent } from './component/carrito/carrito.component';
import { GridCategoriaComponent } from './component/grid-categoria/grid-categoria.component';
import { DireccionesComponent } from './component/usuarios/direcciones/direcciones.component';
import { MercadoPagoLandingComponent } from './component/landing/mercado-pago-landing/mercado-pago-landing.component';



const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'login', component: CrearUsuarioComponent},
  {path:'perfil', component: PerfilComponent, canActivate:[authGuard]},
  {path:'direcciones', component: DireccionesComponent, canActivate:[authGuard]},
  {path:'carrito', component: CarritoComponent, canActivate:[authGuard]},
  {path:'detalleProducto/:id', component: DetallesProductoComponent},
  {path:'landing', component: MercadoPagoLandingComponent},
  
  {path:'grid', component: GridCategoriaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
