import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule, FormsModule, FormGroup} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { InformacionComponent } from './informacion/informacion.component';
import { TalleresComponent } from './talleres/talleres.component';
// import { LoginPersonalComponent } from './login-personal/login-personal.component';
import { ContactoComponent } from './contacto/contacto.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
// import {GoogleMapsModule } from '@angular/google-maps';

import { MaterialModule } from './material.module';
// import { ModalComponent } from './login-personal/modal/modal.component';
// import { ModalProfesorComponent } from './login-personal/modal-profesor/modal-profesor.component';
import { CardModule } from '@coreui/angular';
import { FooterComponent } from './footer/footer.component';
import { ComputacionComponent } from './computacion/computacion.component';
import { MateriaComponent } from './materia/materia.component';
import { EscuelaComponent } from './escuela/escuela.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { CorteConfeccionComponent } from './corte-confeccion/corte-confeccion.component';
import { DibujoComponent } from './dibujo/dibujo.component';
import { ElectricidadComponent } from './electricidad/electricidad.component';
import { EstructurasComponent } from './estructuras/estructuras.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RegistroComponent } from './registro/registro.component';

import { HttpClientModule } from '@angular/common/http';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { LogrosComponent } from './logros/logros.component';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { LoginAlumnosComponent } from './login-alumnos/login-alumnos.component';
import { LoginDocentesComponent } from './login-docentes/login-docentes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    InformacionComponent,
    TalleresComponent,
    // LoginPersonalComponent,
    ContactoComponent,
    UbicacionComponent,
    // ModalComponent,
    // ModalProfesorComponent,
    FooterComponent,
    ComputacionComponent,
    MateriaComponent,
    EscuelaComponent,
    AlimentosComponent,
    CorteConfeccionComponent,
    DibujoComponent,
    ElectricidadComponent,
    EstructurasComponent,
    HomeComponent,
    RegistroComponent,
    ContactanosComponent,
    AlumnosComponent,
    LogrosComponent,
    LoginAlumnosComponent,
    LoginDocentesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    // GoogleMapsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    CardModule,
    HttpClientModule,
    MatDialogModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeaderComponent
  ],
  // providers: [ModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
