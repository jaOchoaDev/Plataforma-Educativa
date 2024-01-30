import { Alumno } from "src/usuarios/usuarios.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'materias'})
export class Materias{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre_materia: string;

    @Column()
    docente: string;

    @Column()
    grado: number;

    @ManyToMany(() => Alumno, alumno => alumno.materias)
    estudiante: Alumno
}