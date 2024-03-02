import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modal-profesor',
  templateUrl: './modal-profesor.component.html',
  styleUrls: ['./modal-profesor.component.css']
})
export class ModalProfesorComponent {

  // loginForm: FormGroup;
  

  // constructor(public authService: AuthService, private fb: FormBuilder, private router: Router, private dialogRef: MatDialogRef<ModalProfesorComponent>){
  //   this.loginForm = new FormGroup({
  //     usuario: new FormControl(''),
  //     password: new FormControl('')
  //   });    
  // }

  // ngOnInit(): void {
  //   this.loginForm = this.fb.group({
  //     usuario: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
  //     password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]]
  //   });
  // }


  // loginSubmit(){

  //   const user = {usuario: this.loginForm.value.usuario, password: this.loginForm.value.password};
  //   console.log('datos de f a enviar al servicio f: ', user)
  //   this.authService.login(user).subscribe({
  //     next: response =>{
  //       this.router.navigate(['Alumnos']);
  //       console.log('Login Correcto', response);

  //       this.dialogRef.close();
  //       this.loginForm.reset();
        
  //     }, error: err =>{
  //       console.log('Error de Login', err);
  //     }
  //   });
  // }

}
