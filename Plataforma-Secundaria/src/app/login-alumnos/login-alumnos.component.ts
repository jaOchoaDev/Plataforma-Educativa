import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-alumnos',
  templateUrl: './login-alumnos.component.html',
  styleUrls: ['./login-alumnos.component.css']
})
export class LoginAlumnosComponent {

  loginForm: FormGroup;

  // alumnoService = inject(AuthService);

  // constructor(public authService: AuthService, private fb: FormBuilder, private router: Router,
  //   public dialogRef: MatDialogRef<LoginAlumnosComponent>){
  //   this.loginForm = new FormGroup({
  //     usuario: new FormControl(''),
  //     password: new FormControl('')
  //   });    
  // }
  constructor(public authService: AuthService, private fb: FormBuilder, private router: Router){
    this.loginForm = new FormGroup({
      usuario: new FormControl(''),
      password: new FormControl('')
    });    
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]]
    });
  }

  loginSubmit(){
    const user = {usuario: this.loginForm.value.usuario, password: this.loginForm.value.password};
    console.log('datos de f a enviar al servicio f: ', user)
    this.authService.login(user).subscribe({
      next: response =>{

        const loggedin = response.loggedIn;
        // console.log('loggedIn desde service f: ', loggedin);
        if(loggedin){
          this.router.navigate(['/Alumnos']);
        }

        // const g = response.gr;        
        // console.log('grado del alumno:', g);
        
        console.log('Login Correcto:', response);
        this.loginForm.reset();
        
      }, error: err =>{
        console.log('Error de Login', err);
      }
    });
  }

}
