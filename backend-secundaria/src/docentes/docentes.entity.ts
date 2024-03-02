// import { Alumno } from "src/usuarios/usuarios.entity";
import { Materias } from 'src/materias/materias.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from '../common/enums/rol.enum';

@Entity({name: 'docentes'})
export class Docentes{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    nombre_docente: string;

    @Column()
    password: string;

    @Column({type: 'enum', default: Role.PROFE, enum: Role})
    rol: Role;

    @ManyToMany(() => Materias, materia => materia.docentes)
    materias: Materias[]
}