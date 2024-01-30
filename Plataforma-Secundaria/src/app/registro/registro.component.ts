import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Alumno } from '../models/alumno';
// import { HttpClient} from '@angular/common/http';
import { FormularioService } from '../formulario.service';
// import { Router } from '@angular/router';

import { Alumno } from '../interfaces/alumno';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

//
//   alumno: Alumno = {
//   nombre: '',
//   apellido_Paterno: '',
//   apellido_Materno: '',
//   contraseña: '',
//   grado: null,
//   taller: '',
//   grupo: ''
// }
//

  // Datos del formulario
FormGroup: any = {};

registerForm!: FormGroup;


  //este constructor es para usar el initForm()
  constructor(private readonly fb: FormBuilder,
    private formularioService: FormularioService){}

  // constructor(private formularioService: FormularioService,
  //   private router: Router){}
  // constructor(private readonly fb: FormBuilder, private formularioService: FormularioService){}
  // constructor(private fb: FormBuilder, private http: HttpClient){}

  ngOnInit(): void {
    //El siguiente código es para usar el initForm()
    // this.registerForm = this.initForm();

    // this.registerForm = this.fb.group({
    //   nombre: new FormControl(''),
    //   apellido_Paterno: new FormControl(''),
    //   apellido_Materno: new FormControl(''),
    //   contraseña: new FormControl(''),
    //   grado: new FormControl(''),
    //   taller: new FormControl(''),
    //   grupo: new FormControl('')
    // })

    //El siguiente código es para no usar initForm()
    this.registerForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(40)]],
      apellido_Paterno: ['', [Validators.required, Validators.maxLength(40)]],
      apellido_Materno: ['', [Validators.required, Validators.maxLength(40)]],
      usuario: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      contraseña: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      grado: ['', [Validators.required, Validators.min(1), Validators.max(3)]],
      taller: ['', [Validators.required]],
      grupo: ['', [Validators.required, Validators.maxLength(1)]],
    });

  }
  // registerForm : any
  onSubmit():void{

    // const data = JSON.stringify(registerForm.value);
    // this.formularioService.submitForm(data);

    // this.formularioService.registerAlumno(this.alumno).subscribe({
    //   next: response => {
    //     console.log('Alumno registrado', response);
    //   },
    //   error: err => {
    //     console.log('Problema de Registro', err);
    //   }});

    // this.formularioService.submitForm(this.registerForm).subscribe({
    //   next: response => {
    //     console.log('Alumno registrado', response);
    //   },
    //   error: err => {
    //     console.log('Problema de Registro: ', err);
    //   }});

    // -------------------------------------------------------------------------------------------
    // this.formularioService.submitForm(this.registerForm).subscribe({
    //   next: response => {
    //     console.log('Alumno registrado', response);
    //   },
    //   error: err => {
    //     console.log('Problema de Registro: ', JSON.stringify(FormGroup, err));
    //   }
    // });

    this.formularioService.submitForm(this.registerForm).subscribe((data) => {});
    // ------------------------------------------------------------------------------------------------

    //     const alumno = new this.registerForm(this.nombre, this.apellido_Paterno, this.apellido_Materno, this.contraseña, this.grado, this.taller, this.grupo);
    // this.formularioService.registerAlumno(alumno).subscribe({
    //   next: response => {
    //     console.log('Alumno registrado', response);
    //   },
    //   error: err => {
    //     console.log('Problema de Registro', err);
    //   }});

    // console.log('this.alumno: ', this.alumno);
    console.log('this.registerForm: ', this.registerForm.value);
    // this.registerForm.reset();

  }

  // initForm(): FormGroup{
  //   return this.fb.group({
  //     nombre: ['', [Validators.required]],
  //     apellido_Paterno: ['', [Validators.required]],
  //     apellido_Materno: ['', [Validators.required]],
  //     contraseña: ['', [Validators.required, Validators.minLength(4)]],
  //     grado: ['', [Validators.required, Validators.min(1), Validators.max(3)]],
  //     taller: ['', [Validators.required]],
  //     grupo: ['', [Validators.required, Validators.maxLength(1)]],
  //   })
  // }

}
