//Esta clase es la interface

export class Alumno {
    // id?: number;
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    usuario: string;
    password: string;
    grado: number;
    taller: string;
    grupo: string;

    constructor(nombre: string, apellidoPaterno: string, apellidoMaterno: string, usuario: string,
    contraseña: string, grado: number, taller: string, grupo: string){
        this.nombre = nombre;
        this.apellido_paterno = apellidoPaterno;
        this.apellido_materno = apellidoMaterno;
        this.usuario = usuario;
        this.password = contraseña;
        this.grado = grado;
        this.taller = taller;
        this.grupo = grupo;        
    }

}
