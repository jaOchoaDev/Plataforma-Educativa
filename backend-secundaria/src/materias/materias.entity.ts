import { Docentes } from '../docentes/docentes.entity';
import { Alumno } from '../usuarios/usuarios.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'materias'})
export class Materias{
    @PrimaryGeneratedColumn()
    id_Materia: number;

    @Column()
    nombre_materia: string;

    @Column()
    docente: string;

    @Column()
    grado: number;

    @ManyToMany(() => Alumno, alumno => alumno.materias)
    @JoinTable()
    estudiantes: Alumno

    @ManyToMany(() => Docentes, profe => profe.materias)
    @JoinTable()
    docentes: Docentes[]
}