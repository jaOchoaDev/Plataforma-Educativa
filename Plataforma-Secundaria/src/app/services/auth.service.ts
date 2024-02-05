import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
// import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private httpClient = inject(HttpClient);
  private baseURL = 'http://localhost:3000/auth/login';
  // private baseURL: string;

  // constructor() {
  //   this.baseURL = 'http://localhost:3000/auth';
  // }

  // login(formValue: any){
  //   return firstValueFrom(
  //     this.httpClient.post<any>(`${this.baseURL}/login`, formValue)
  //   );
  // }

  constructor(private http: HttpClient){}
  
  login(log: any): Observable<any>{
    console.log('datos recibidos en el service: ', log);
    return this.http.post(`${this.baseURL}`, log);
  }

}
