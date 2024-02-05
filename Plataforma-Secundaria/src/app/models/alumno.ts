//Esta clase es la interface

export class Alumno {
    // id?: number;
    nombre: string;
    apellido_Paterno: string;
    apellido_Materno: string;
    usuario: string;
    contraseña: string;
    grado: number;
    taller: string;
    grupo: string;

    constructor(nombre: string, apellidoPaterno: string, apellidoMaterno: string, usuario: string,
    contraseña: string, grado: number, taller: string, grupo: string){
        this.nombre = nombre;
        this.apellido_Paterno = apellidoPaterno;
        this.apellido_Materno = apellidoMaterno;
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.grado = grado;
        this.taller = taller;
        this.grupo = grupo;        
    }

}
