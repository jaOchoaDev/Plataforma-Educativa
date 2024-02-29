import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { RolNombre } from './rol.enum';
import { Alumno } from '../usuarios/usuarios.entity';

//Aquí se crea la tabla de alumnos en la bd
@Entity({ name: 'rol' })
export class RolEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rolNombre: RolNombre;

  @ManyToMany(type => Alumno, alumno => alumno.roles)
  alumnos: Alumno[];

}
