// import { Alumno } from "src/usuarios/usuarios.entity";
import { Materias } from 'src/materias/materias.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from '../common/enums/rol.enum';

@Entity({name: 'docentes'})
export class Docentes{
    @PrimaryGeneratedColumn()
    id_Docente: number;

    @Column({unique: true})
    nombre_docente: string;

    @Column()
    password: string;

    @Column({type: 'enum', default: Role.PROFE, enum: Role})
    rol: Role;

    @ManyToMany(() => Materias, materia => materia.docentes)
    materias: Materias[]
}

/* EL USUARIO DE LOS PROFESORES ES SU NOMBRE COMPLETO SIN ACENTOS
   SU CONTRASEÑA DE ACCESO SON LAS INICIAL DE SU NOMBRE(S) Y APELLIDOS,
   EN MINÚSCULAS MÁS EL NÚMERO EN QUE FUE REGISTRADO */

/* 
('Magdalena Ceja Macias', 'mcm1');
('Luis Armando Oregel Elias', 'laoe2'),
('Yuliana Hernandez Bautista', 'yhb3'),
('Sandra Jazmín Peña Morales', 'sjpm4'),
('Juan Carlos Romero Montejano', 'jcrm5'),
('Gerardo Rodriguez Vega', 'grv6'),
('Carlos Alberto Campos Garcia', 'cacg7'),
('Nesthor Erwin Macias Guzman', 'nemg8'),
('Alejandra Marina Elias Muratalla', 'amem9'),
('Luis Fernando Campos Gonzalez', 'lfcg10'),
('Margarita Vega Lopez', 'mvl11'),
('Julia Silvia Olivares Olivares', 'jsoo12'),
('Samuel Sanchez Puentes', 'ssp13'),
('Angelica Anabel Sierra Hernandez', 'aash14'),
('Mayra Alejandra Linares Arv', 'mala15'),
('Ismael Sanchez Puentes', 'isp16'),
('Julio Adrian Alvarez Hernandez', 'jaah17'),
('Yovani Lopez Maciel', 'ylm18'),
('Vladimir Peña Zalapa', 'vpz19'),
('Jesus Alberto Ugarte Ibarra', 'jaui20'),
('Guillermo Rodriguez Alejandre', 'gra21'),
('Carina Oregel Mendoza', 'com22'),
('Fernando Hernandez Ochoa', 'fho23');
   */

/* EL USUARIO ADMINISTRADOR, CON CREDENCIALES DE DOCENTE
   USUARIO: Javier Ayala Ochoa Admin
   PASSWORD: jAD25 */