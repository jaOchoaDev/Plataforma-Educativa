import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

//componente de login
export class ModalComponent {

  loginForm: FormGroup;

  // alumnoService = inject(AuthService);

  constructor(public authService: AuthService){
    this.loginForm = new FormGroup({
      usuario: new FormControl(),
      password: new FormControl()
    });    
  }

  // constructor(public authService: AuthService){}

  loginSubmit(){
    // const response = await this.alumnoService.login(this.loginForm.value);
    // console.log(response);

    const user = {usuario: this.loginForm.value.usuario, password: this.loginForm.value.password};
    console.log('datos a enviar al servicio: ', user)
    this.authService.login(user).subscribe({
      next: response =>{
        console.log('LoginCorrecto', response);
      }, error: err =>{
        console.log('Error de Login', err);
      }
    });
  }

}
