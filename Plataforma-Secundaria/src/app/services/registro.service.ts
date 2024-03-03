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

    registrar(datos: any): Observable<any>{
      console.log('Datos que llegan al servicio:', datos);
    
      // Crear un objeto FormData
      const formData: FormData = new FormData();
    
      // Agregar datos al objeto FormData
      Object.keys(datos).forEach(key => {
        formData.append(key, datos[key]);
      });
    
      // Agregar otros datos si es necesario
    
      // Crear cabeceras
      const headers = {
        // No es necesario establecer 'Content-Type' para FormData, el navegador lo manejará automáticamente
        'Content-Type': 'multipart/form-data',
        // Agregar otras cabeceras si es necesario
      };

      console.log(formData, 'fd');
    
      // Realizar la solicitud HTTP POST
      return this.http.post<any>(this.registroURL, datos, { headers: headers });
    }

}