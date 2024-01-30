import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.component.html',
  styleUrls: ['./talleres.component.css']
})
export class TalleresComponent {

  constructor(private router: Router) { }

  // openCard(){
  //   const ruta = '/../alimentos/alimentos.component.html';
  //   this.router.navigate([ruta], { target: '_blank' });
  // }

}
