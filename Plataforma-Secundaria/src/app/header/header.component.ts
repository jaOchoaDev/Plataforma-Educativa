import { Component, ElementRef, HostListener } from '@angular/core';
import { ModalComponent } from '../login-personal/modal/modal.component';
import { ModalProfesorComponent } from '../login-personal/modal-profesor/modal-profesor.component';
import {MatDialog} from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  
  constructor(public dialog: MatDialog, public authService: AuthService,
              private router: Router) {}
  // constructor(public dialog: MatDialog, private el: ElementRef) {}
  // constructor(private el: ElementRef) {}

  addClass = false;
  scroll = 100;

  @HostListener('window:scroll', [])
    onWindowScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY >= this.scroll) {
      this.addClass = true;
    } else {
      this.addClass = false;
    }
  }

  // openDialogAlumno(): void {
  //   const dialogRef = this.dialog.open(ModalComponent, {
  //     width: '60vw',
  //     height: '70vh'
  //   });
  // }
  // openDialogProfesor(): void {
  //   const dialogRef = this.dialog.open(ModalProfesorComponent, {
  //     width: '60vw',
  //     height: '70vh'
  //   });
  // }

  logout(){
    localStorage.removeItem('nameUsuario');
    this.router.navigate(['./LoginAlumnos']);
    console.log('Salio');
  }

  // goToFooter() {
  //   const footer = this.el.nativeElement.querySelector('#footer');
  //   footer.scrollIntoView({ behavior: 'smooth' });
  // }

}