import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from '../alumnos/alumnos.component';
import { HomeComponent } from '../home/home.component';
// import { ModalComponent } from '../login-personal/modal/modal.component';
// import { ModalProfesorComponent } from '../login-personal/modal-profesor/modal-profesor.component';
import { AlimentosComponent } from '../alimentos/alimentos.component';
import { ComputacionComponent } from '../computacion/computacion.component';
import { CorteConfeccionComponent } from '../corte-confeccion/corte-confeccion.component';
import { DibujoComponent } from '../dibujo/dibujo.component';
import { ElectricidadComponent } from '../electricidad/electricidad.component';
import { EstructurasComponent } from '../estructuras/estructuras.component';
import { EscuelaComponent } from '../escuela/escuela.component';
// import { RegistroComponent } from '../registro/registro.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactanosComponent } from '../contactanos/contactanos.component';
import { LoginAlumnosComponent } from '../login-alumnos/login-alumnos.component';
import { LoginDocentesComponent } from '../login-docentes/login-docentes.component';
// import { accesoGuard } from '../guard/acceso.guard';
// import { AppComponent } from '../app.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Alumnos', component: AlumnosComponent},
  //los siguientes estan en desuso(son de modal y modalprofesor)
  // {path: 'LoginAlumnos', component: ModalComponent},
  // {path: 'LoginProfesores', component: ModalProfesorComponent},
  {path: 'Alimentos', component: AlimentosComponent},
  {path: 'Computacion', component: ComputacionComponent},
  {path: 'CorteConfeccion', component: CorteConfeccionComponent},
  {path: 'Dibujo', component: DibujoComponent},
  {path: 'Electricidad', component: ElectricidadComponent},
  {path: 'Estructuras', component: EstructurasComponent},
  {path: 'Escuela', component: EscuelaComponent},
  {path: 'Footer', component: FooterComponent},
  {path: 'Contactanos', component: ContactanosComponent},
  {path: 'LoginAlumnos', component: LoginAlumnosComponent},
  {path: 'LoginDocentes', component: LoginDocentesComponent}
  // {path: 'Contact', component: AppComponent}

  // {path: 'Registro', component: RegistroComponent}

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }