import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-docentes',
  templateUrl: './login-docentes.component.html',
  styleUrls: ['./login-docentes.component.css']
})
export class LoginDocentesComponent {
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

  // constructor(public authService: AuthService){}

  loginSubmit(){
    // const response = await this.alumnoService.login(this.loginForm.value);
    // console.log(response);

    const user = {usuario: this.loginForm.value.usuario, password: this.loginForm.value.password};
    console.log('datos de f a enviar al servicio f: ', user)
    this.authService.login(user).subscribe({
      next: response =>{
        // const nameAlumno = response.usuario;
        // console.log('nombre de usuario: ', nameAlumno);
        this.router.navigate(['Alumnos']);
        console.log('Login Correcto', response);

        // this.dialogRef.close();
        this.loginForm.reset();
        
      }, error: err =>{
        console.log('Error de Login', err);
      }
    });
  }
}
