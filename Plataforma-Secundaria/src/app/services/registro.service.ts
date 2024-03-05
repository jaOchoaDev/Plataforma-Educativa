import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Alumno } from '../models/alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegistroService {

    // private baseURL = 'http://localhost:3000';

    // constructor(private http: HttpClient){}

    // registrarAlumno(formData: any){
    //     return this.http.post(`${this.baseURL}/registro`, formData);
    // }

    //Usando el environment de URL
    registroURL = environment.registroURL;

    constructor(private http: HttpClient){}

    // public registrar(alumno: Alumno): Observable<any>{
    //   console.log('datos que llegan al servicio: ', alumno);
    //   return this.http.post<any>(`${this.registroURL}`, alumno);
    // }

    //Lo unico que hice fue tipar el POST que ahora es regresa un Observable de tipo Alumno
    public registrar(body: Alumno): Observable<Alumno>{
    
      // Realizar la solicitud HTTP POST
      return this.http.post<Alumno>(this.registroURL, body);
    }

}