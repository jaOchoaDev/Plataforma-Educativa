import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { MateriasService } from '../services/materias.service';
// import { Materias } from '../models/materias';
// import { ModalComponent } from '../login-personal/modal/modal.component';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})

export class AlumnosComponent implements OnInit{
materias: any[];
// gr: any;


  // constructor(private materiasService: MateriasService, private modal: ModalComponent){}
  constructor(private materiasService: MateriasService, private authService: AuthService) {
    // this.gr = this.authService.getGrado();
    // console.log('gr del alumno component:', this.gr);
  }

  // getGrado(value: any){
  //   this.authService.setGrado(value);
  // }


  ngOnInit(): void {
    // this.materiasService.getMaterias().subscribe(data => {
    //   this.materias = data;
    // });
    // console.log('materias')

    // this.materiasService.getMateriasGrado().subscribe(data => {
    //   this.materias = data;
    // });
    // console.log('materias')
  }


  // listMaterias: Materias[] = [];

  // list(){
  //   this.materiasService.getMaterias().subscribe(res =>{
  //     if(res.success){
  //       this.listMaterias = res.data;
  //     }
  //   });
  // }

}
