import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MateriasService } from '../services/materias.service';
import { Materias } from '../models/materias';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})

export class AlumnosComponent implements OnInit{

  ngOnInit(): void {
    this.list();
  }

  listMaterias: Materias[] = [];

  constructor(private materiasService: MateriasService){}

  list(){
    this.materiasService.getMaterias().subscribe(res =>{
      if(res.success){
        this.listMaterias = res.data;
      }
    });
  }

}
