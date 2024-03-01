import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Materias } from 'src/materias/materias.entity';
// import { RolEntity } from 'src/rol/rol.entity';

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
  password: string;

  @Column()
  grado: number;

  @Column()
  taller: string;
  
  @Column()
  grupo: string;

  @Column({default: 'usuario'})
  rol: string;

  @ManyToMany(() => Materias, materia => materia.estudiante)
  materias: Materias[]

  // @ManyToMany(type => RolEntity, rol => rol.alumnos, {eager: true})
  // @JoinTable({
  //   name: 'alumnos_rol',
  //   joinColumn: {name: 'alumnos_id'},
  //   inverseJoinColumn: {name: 'rol_id'}
  // })
  // roles: RolEntity[];
}
