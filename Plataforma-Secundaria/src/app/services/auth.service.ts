import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
// import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = 'http://localhost:3000/auth/login';
  private loggedIn = false;
  public gr: any;

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
    console.log('datos recibidos en el service f: ', log);
    return this.http.post(`${this.baseURL}`, log);
  }

  //obtener el grado
  // setGrado(value: any){
  //   this.gr = value;
  // }
  // getGrado(){
  //   return this.gr;
  // }

  logout(){
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

}
