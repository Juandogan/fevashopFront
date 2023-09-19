import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CrearUsuarioComponent } from './component/crear-usuario/crear-usuario.component';
import { FormsModule } from '@angular/forms';
import { AdminService } from './services/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './component/main/main.component';
import { PerfilComponent } from './component/usuarios/perfil/perfil.component';
import { MkMagicAlertsModule } from 'mk-magic-alerts';
import { Carousel1Component } from './component/carousel/carousel1.component';
import { DetallesProductoComponent } from './component/productos/detalles-producto/detalles-producto.component';
import {IvyCarouselModule} from 'angular-responsive-carousel-ng16';
import 'hammerjs';
import { Carouselx4Component } from './component/carouselx4/carouselx4.component';
import { CarritoComponent } from './component/carrito/carrito.component';
import { GridCategoriaComponent } from './component/grid-categoria/grid-categoria.component';
import { DireccionesComponent } from './component/usuarios/direcciones/direcciones.component';
import { MercadoPagoLandingComponent } from './component/landing/mercado-pago-landing/mercado-pago-landing.component';
import { EjemploComponent } from './component/ejemplo/ejemplo.component';

// import { SwiperModule } from 'swiper/angular';
// import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
// import {IvyCarouselModule} from 'angular-responsive-carousel';

FormsModule

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CrearUsuarioComponent,
    MainComponent,
    PerfilComponent,
    Carousel1Component,
    DetallesProductoComponent,
    Carouselx4Component,
    CarritoComponent,
    GridCategoriaComponent,
    DireccionesComponent,
    MercadoPagoLandingComponent,
    EjemploComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MkMagicAlertsModule,
    IvyCarouselModule

    // SwiperModule
    // NgxUsefulSwiperModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
