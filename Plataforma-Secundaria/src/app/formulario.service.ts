import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Alumno } from './interfaces/alumno';
// import { Alumno } from './models/alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FormularioService {

  //dirección url (baseURL) del servidor backend. http://localhost:3000/usuarios
  backURL: string = 'http://localhost:3000';

  constructor( private http: HttpClient){}

  // registerAlumno(alumno: Alumno): Observable<Alumno>{
  //   return this.http.post<Alumno>(`${this.backURL}/usuarios`, alumno);
  // }


  // private baseUrl = 'http://localhost:3000';
  // constructor(private http: HttpClient) { }

  //este si jala 2-3
  submitForm(formData: any) {
    return this.http.post(`${this.backURL}/registro`, formData);
  }

  // usuarioURL = environment.usuarioURL;
  // constructor(private httpClient: HttpClient){}
  // public save(alumno: Alumno): Observable<any> {
  //   return this.httpClient.post<any>(`${this.usuarioURL}/usuarios`, alumno);
  // }

}
