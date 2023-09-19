import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { PublicService } from 'src/app/services/public.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public config_global : any = {}
  public productos : any 
  loading= true

  imagesForSlider = [
   
   
    {path: '../../../../assets/trio.jpg'},
    {path: '../../../../assets/equipo.jpg'},
     {path: '../../../../assets/image.png'},   
     {path: '../../../../assets/grupal.jpg'},
 ];

  constructor(private clienteService:ClienteService, private publicService:PublicService){
    this.clienteService.obtener_config_publico().subscribe(res=>{
      this.config_global = res.data
      
      this.publicService.pedir_productos_public().subscribe(res=>{
        this.productos = res.data
        this.loading= false
        console.log(this.productos,'MAin')
      })

      
      
      
    })




  }
}
