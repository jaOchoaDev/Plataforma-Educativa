import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Materias } from "../models/materias";

@Injectable({
    providedIn: 'root'
  })
  export class MateriasService {

    URL: string = 'http://localhost:3000/materias';

    constructor(private http: HttpClient){}

    // Obtiene todas las materias
    getMaterias(): Observable<any>{
        return this.http.get<Materias[]>(this.URL).pipe(map(res => res));
    }

    // Obtiene materias por grado
    getMateriasGrado( grado:number ): Observable<any>{
      const urlMateriasxGrado: string = `http://localhost:3000/materias/grado/${grado}`;
        return this.http.get<Materias[]>(urlMateriasxGrado).pipe(map(res => res));
    }

    // Obtiene materias por grupo
    getMateriasGrupo( grupo:string ): Observable<any>{
      const urlMateriasxGrupo: string = `http://localhost:3000/materias/grado/${grupo}`;
        return this.http.get<Materias[]>(urlMateriasxGrupo).pipe(map(res => res));
    }

  }