import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import * as jwt from 'jwt-decode';

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

        const decodedToken = jwt.jwtDecode(response.token);
        console.log(decodedToken.aud, 'token desarmado ');

        if(loggedin && response.rol === 'usuario'){
          this.router.navigate(['/Alumnos']);
        }

        if(loggedin && response.rol === 'profesor'){
          this.router.navigate(['/Alumnos']);
          console.log('Si entro a profesores');
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
