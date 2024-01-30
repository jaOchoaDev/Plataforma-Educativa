import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { ModalProfesorComponent } from './modal-profesor/modal-profesor.component';

@Component({
  selector: 'app-login-personal',
  templateUrl: './login-personal.component.html',
  styleUrls: ['./login-personal.component.css'],
})
export class LoginPersonalComponent {

  constructor(public dialog: MatDialog) {}

  openDialogAlumno(): void {
    // const dialogRef = this.dialog.open(ModalComponent, {
      this.dialog.open(ModalComponent, {
      width: '60vw',
      height: '70vh'
    });
  }

  openDialogProfesor(): void {
    // const dialogRef = this.dialog.open(ModalProfesorComponent, {
      this.dialog.open(ModalProfesorComponent, {
      width: '60vw',
      height: '70vh'
    });
  }

}