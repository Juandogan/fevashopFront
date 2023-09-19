import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-carousel1',
  templateUrl: './carousel1.component.html',
  styleUrls: ['./carousel1.component.css']
})
export class Carousel1Component {

  images = [
    {path: '../../../../assets/image.png'},
    {path: '../../../../assets/image.png'},
    {path: '../../../../assets/image.png'},
    {path: '../../../../assets/image.png'},
    {path: '../../../../assets/image.png'},
    {path: '../../../../assets/image.png'},
    {path: '../../../../assets/image.png'},
    {path: '../../../../assets/image.png'},
];   

imagesForSlider = [
   
   
   {path: '../../../../assets/trio.jpg'},
   {path: '../../../../assets/equipo.jpg'},
    {path: '../../../../assets/image.png'},   
    {path: '../../../../assets/grupal.jpg'},
];
}
