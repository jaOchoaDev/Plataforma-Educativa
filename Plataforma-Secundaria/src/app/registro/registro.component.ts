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
export class RegistroComponent implements OnInit{

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
registerForm: FormGroup;
  constructor(private registroService: RegistroService, private fb: FormBuilder){
    this.registerForm = new FormGroup({
      nom: new FormControl(''),
      apellido_Paterno: new FormControl(''),
      apellido_Materno: new FormControl(''),
      usuario: new FormControl(''),
      contraseña: new FormControl(''),
      grado: new FormControl(''),
      taller: new FormControl(''),
      grupo: new FormControl('')
    });
  }

  // registerForm: FormGroup;
  // registerForm = new FormGroup({
  //   nom: new FormControl(''),
  //   apellido_Paterno: new FormControl(''),
  //   apellido_Materno: new FormControl(''),
  //   usuario: new FormControl(''),
  //   contraseña: new FormControl(''),
  //   grado: new FormControl(''),
  //   taller: new FormControl(''),
  //   grupo: new FormControl('')
  // });

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nom: ['', [Validators.required, Validators.maxLength(40)]],
      apellido_Paterno: ['', [Validators.required, Validators.maxLength(40)]],
      apellido_Materno: ['', [Validators.required, Validators.maxLength(40)]],
      usuario: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      contraseña: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      grado: ['', [Validators.required, Validators.min(1), Validators.max(3)]],
      taller: ['', [Validators.required]],
      grupo: ['', [Validators.required, Validators.maxLength(1)]],
    });
  }


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
