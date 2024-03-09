import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { MateriasService } from '../services/materias.service';
// import { Materias } from '../models/materias';
// import { ModalComponent } from '../login-personal/modal/modal.component';
import { AuthService } from '../services/auth.service';
import { AlumnosService } from '../services/alumnos.service';
import { Alumno } from './interface/alumno.interface';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})

export class AlumnosComponent implements OnInit{
materias: any[];
usuario: string;
alumno: Alumno;
// gr: any;


  // constructor(private materiasService: MateriasService, private modal: ModalComponent){}
  constructor(private materiasService: MateriasService, 
              private authService: AuthService,
              private alumnosService: AlumnosService,) {
    // this.gr = this.authService.getGrado();
    // console.log('gr del alumno component:', this.gr);
  }

  // getGrado(value: any){
  //   this.authService.setGrado(value);
  // }


  ngOnInit(): void {
    // Ejemplo: Obtener un valor desde localStorage
     this.usuario = localStorage.getItem("nameUsuario");

    if (this.usuario) {
    console.log("Dato recuperado:", this.usuario);
    } else {
    console.log("La clave no existe en localStorage");
    }

    this.alumnosService.getAlumno(this.usuario).subscribe(
      (alumno) => {
        console.log('Datos del alumno:', alumno);
        // Aquí puedes manejar los datos del alumno
        this.alumno = alumno;
        this.materiasService.getMateriasGrado(this.alumno.grado).subscribe(
          (materias) => {
            console.log('Estas son las materias del chamaco', materias);
            this.materias = materias
          })
      },
      (error) => {
        console.error('Error al obtener el alumno:', error);
      }
    );
    
    console.log(this.alumno);







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
