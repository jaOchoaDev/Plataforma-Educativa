import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../alumnos/interface/alumno.interface';
// import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private baseURL = 'http://localhost:3000/registro/';


  constructor(private http: HttpClient){}

  getAlumno(usuario: string): Observable<Alumno>{
    const res = this.http.get<Alumno>(`${this.baseURL}${usuario}`);
    console.log('entro', res);
    return res;
  }

}
