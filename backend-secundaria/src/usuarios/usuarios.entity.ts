import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Materias } from 'src/materias/materias.entity';

//Aquí se crea la tabla de alumnos en la bd
@Entity({ name: 'alumnos' })
export class Alumno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido_paterno: string;

  @Column()
  apellido_materno: string;

  @Column({unique: true})
  usuario: string;

  @Column()
  contraseña: string;

  @Column()
  grado: number;

  @Column()
  grupo: string;

  @Column()
  taller: string;

  @ManyToMany(() => Materias, materia => materia.estudiante)
  materias: Materias[]
}
