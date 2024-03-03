import { Controller, Post, Body, Get, Param, ParseIntPipe, Delete, Patch, HttpException, HttpStatus } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UsuariosService } from './usuarios.service';
import { Alumno } from './usuarios.entity';
// import { error } from 'console';
// import { UpdateAlumnoDto } from './dto/update-alumno.dto';

//Este es el endpoint para registrar: http://localhost:3000/registro
@Controller('registro')
export class UsuariosController {

    constructor(private usuariosService: UsuariosService){}

    //metodo para registrar usando dto
    @Post()
    async save(@Body() newAlumno:CreateAlumnoDto){
        console.log('Entro?', newAlumno);
        // console.log('Datos recibidos del front: ', newAlumno);
        return await this.usuariosService.create(newAlumno).then(res => {
            return { success: true, data: res }
        }).catch(error => {
            console.log(error);
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        })
    }


    // Obtener todos los alumnos
    @Get()
    getAlumnos(): Promise<Alumno[]>{
        return this.usuariosService.getAlumnos();
    }

    // Obtener un alumno por id
    // @Get(':id')
    // getAlumno(@Param('id', ParseIntPipe) id: number): Promise<Alumno>{
    //     return this.usuariosService.getAlumno(id);
    // }

    // Obtener un alumno por usuario
    @Get(':usuario')
    getUsuario(@Param('usuario') usuario: string): Promise<Alumno>{
        return this.usuariosService.getUsuario(usuario);
    }

    
    //Actualizar Alumno
    // @Patch(':id')
    // updateAlumno(@Param('id', ParseIntPipe) id:number, @Body() alumno: UpdateAlumnoDto){
    //     return this.usuariosService.updateAlumnos(id, alumno);
    // }

    //Eliminar Alumno
    // @Delete(':id')
    // deleteAlumno(@Param('id', ParseIntPipe) id: number){
    //     return this.usuariosService.deleteAlumno(id);
    // }

}
