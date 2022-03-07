import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel-pasteles',
  templateUrl: './carrusel-pasteles.component.html',
  styleUrls: ['./carrusel-pasteles.component.css']
})
export class CarruselPastelesComponent implements OnInit {
	responsiveOptions!:any;

  constructor() {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
   }

  ngOnInit(): void {
  }

}
