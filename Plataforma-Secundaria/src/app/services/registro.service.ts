import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RegistroService {

    private baseURL = 'http://localhost:3000';

    constructor(private http: HttpClient){}

    registrarAlumno(formData: any){
        return this.http.post(`${this.baseURL}/registro`, formData);
    }

}