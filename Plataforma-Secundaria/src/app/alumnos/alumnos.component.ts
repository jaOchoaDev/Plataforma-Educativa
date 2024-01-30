import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})

export class AlumnosComponent {
// alumno: any;
alumno = 'Javier Ayala';

  // constructor(public dialog: MatDialog) {}

  // openDialogAlumno(): void {
  //   const dialogRef = this.dialog.open(MateriaComponent, {
  //     width: '60vw',
  //     height: '70vh'
  //   });
  // }

}
