import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
// import { Alumno } from '../models/alumno';
// import { HttpClient} from '@angular/common/http';
// import { FormularioService } from '../formulario.service';
import { RegistroService } from '../services/registro.service';
import { Router } from '@angular/router';
import { Alumno } from '../models/alumno';

// import { Alumno } from '../interfaces/alumno';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  //------------------------------------USANDO NGMODEL-----------------------------------
  
  //----------Double Binding con ngModel
  // nombre = "";
  // apellido_Paterno = "";
  // apellido_Materno = "";
  // usuario = "";
  // contraseña = "";
  // grado: number = null;
  // taller = "";
  // grupo = "";
  
  // constructor(private registroService: RegistroService, private router: Router){}
  
  // ngOnInit(): void {}

// router.navigate sirve para redireccionar despues de una acción del form
// this.router.navigate([])

//Método paa registrar alumno usando ngModel
  // onCreate(): void{
  //   const registro = new Alumno(this.nombre, this.apellido_Paterno, this.apellido_Materno, this.usuario, this.contraseña, this.grado, this.taller, this.grupo);
  //   this.registroService.registrar(registro).subscribe({
  //     next: data =>{
  //       console.log('Alumno Registrado', data);
  //     }, error: err=>{
  //       console.log('Problema de Registro', err);
  //     }
  //   });
  // }


  //---------------------USANDO FORMGROUP------------------------------

  constructor(private registroService: RegistroService){}

  registerForm = new FormGroup({
    nombre: new FormControl(''),
    apellido_Paterno: new FormControl(''),
    apellido_Materno: new FormControl(''),
    usuario: new FormControl(''),
    contraseña: new FormControl(''),
    grado: new FormControl(''),
    taller: new FormControl(''),
    grupo: new FormControl('')
  })

  onCreate(){
    console.log('datos a enviar al servicio: ', this.registerForm.value);
    this.registroService.registrar(this.registerForm.value).subscribe({
      next: response=>{
        console.log('Alumno Registrado', response);
      }, error: err=>{
        console.log('Error de Registro', err);
      }
    });
  }

}
