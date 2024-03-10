import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Materias } from 'src/materias/materias.entity';
import { Role } from '../common/enums/rol.enum';

//Aquí se crea la tabla de alumnos en la bd
@Entity({ name: 'alumnos' })
export class Alumno {
  @PrimaryGeneratedColumn()
  id_alumno: number;
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
  @Column({type: 'enum', default: Role.USER, enum: Role})
  rol: Role;
  @ManyToMany(() => Materias, materia => materia.estudiantes)
  materias: Materias[]

  // @ManyToMany(type => RolEntity, rol => rol.alumnos, {eager: true})
  // @JoinTable({
  //   name: 'alumnos_rol',
  //   joinColumn: {name: 'alumnos_id'},
  //   inverseJoinColumn: {name: 'rol_id'}
  // })
  // roles: RolEntity[];
}

/* EL USUARIO ADMINISTRADOR, CON CREDENCIALES DE ALUMNO
   USUARIO: JaviAdmin
   PASSWORD: jA25 */

   /* EL USUARIO ADMINISTRADOR, CON CREDENCIALES DE DOCENTE
   USUARIO: Javier Ayala Ochoa Admin
   PASSWORD: jAD25 */