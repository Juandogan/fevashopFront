import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carouselx4',
  templateUrl: './carouselx4.component.html',
  styleUrls: ['./carouselx4.component.css']
})
export class Carouselx4Component implements OnInit {

  @Input('data') data:any ;

constructor(){


}

ngOnInit(): void {
  console.log(this.data)
}

images = [
  {path: '../../../assets/image\ 11.png'},
  {path: '../../../../assets/remera1.jpg'},
  {path: '../../../assets/image\ 11.png'},
  {path: '../../../assets/image\ 13.png'},
  {path: '../../../../assets/remera1.jpg'},
  {path: '../../../assets/image\ 13.png'},
];   

imagesForSlider = [
 {path: '../../../../assets/image.png'},
 {path: '../../../../assets/image.png'},
 {path: '../../../../assets/image.png'},
 {path: '../../../../assets/image.png'},
 {path: '../../../../assets/image.png'},
 {path: '../../../../assets/image.png'},   
];

}
