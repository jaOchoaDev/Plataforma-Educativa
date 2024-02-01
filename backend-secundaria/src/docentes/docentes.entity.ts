// import { Alumno } from "src/usuarios/usuarios.entity";
import { Materias } from 'src/materias/materias.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'docentes'})
export class Docentes{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre_docente: string;

    @Column()
    grupo: string;

    @ManyToMany(() => Materias, materia => materia.docentes)
    materias: Materias[]
}