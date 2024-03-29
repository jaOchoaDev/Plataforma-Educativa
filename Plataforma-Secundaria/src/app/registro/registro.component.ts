import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
// import { Alumno } from '../models/alumno';
// import { HttpClient} from '@angular/common/http';
// import { FormularioService } from '../formulario.service';
import { RegistroService } from '../services/registro.service';
// import { Router } from '@angular/router';
import { Alumno } from '../models/alumno';

// import { Alumno } from '../interfaces/alumno';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  //---------------------USANDO FORMGROUP------------------------------

  registerForm: FormGroup;

  constructor(private registroService: RegistroService, private fb: FormBuilder){
      // registerForm: FormGroup;
  this.registerForm = new FormGroup({
    nom: new FormControl(''),
    apellido_Paterno: new FormControl(''),
    apellido_Materno: new FormControl(''),
    usuario: new FormControl(''),
    contraseña: new FormControl(''),
    grado: new FormControl(''),
    taller: new FormControl(''),
    grupo: new FormControl('')
  })
  }



  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nom: ['', [Validators.required, Validators.maxLength(40)]],
      apellido_Paterno: ['', [Validators.required, Validators.maxLength(40)]],
      apellido_Materno: ['', [Validators.required, Validators.maxLength(40)]],
      usuario: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      contraseña: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      //grado como es un numero debe inicializare con 0 (numero cualquiera), porque si lo inicializas con comillas se toma como una cadena de caracteres (String) 
      grado: [0, [Validators.required, Validators.min(1), Validators.max(3)]],
      taller: ['', [Validators.required]],
      grupo: ['', [Validators.required, Validators.maxLength(1)]],
    });
  }


  onCreate(){
    console.log(typeof this.registerForm.value.apellido_Materno)
    console.log('datos a enviar al servicio: ', this.registerForm.value);
    const data: Alumno = {
      nombre: this.registerForm.value.nom,
      apellido_paterno: this.registerForm.value.apellido_Paterno,
      apellido_materno: this.registerForm.value.apellido_Materno,
      usuario: this.registerForm.value.usuario,
      password: this.registerForm.value.contraseña,
      grado: this.registerForm.value.grado,
      taller: this.registerForm.value.taller,
      grupo: this.registerForm.value.grupo,
    }
    this.registroService.registrar(data).subscribe({
      next: (response: any)=>{
        console.log('Alumno Registrado', response);
        // window.confirm('Alumno Registrado');
        window.alert('Alumno Registrado');
        this.registerForm.reset();
      }, error: (err: { error: any; })=>{
        console.log('Error de Registro', err);
        if (err.error) {
          console.log('Detalles del error:', err.error);
        }
      }
    });
  }

}
