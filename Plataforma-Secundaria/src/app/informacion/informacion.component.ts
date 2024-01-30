import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  slides: any[] = new Array(4).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() {}

  ngOnInit(): void {
    this.slides[0] = {
      src: '../../assets/img/slide1.jpg'
    };
    this.slides[1] = {
      src: '../../assets/img/slide2.jpg'
    }
    this.slides[2] = {
      src: '../../assets/img/slide1.jpg'
    }
    this.slides[3] = {
      src: '../../assets/img/slide2.jpg'
    }
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }

}