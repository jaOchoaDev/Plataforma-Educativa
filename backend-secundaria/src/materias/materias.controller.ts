import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { MateriasService } from "./materias.service";
import { Materias } from "./materias.entity";
import { Auth } from "../auth/decorators/auth.decorator";
import { Role } from '../common/enums/rol.enum';

//Declarando el @Auth para que sólo permita roles de usuario
// @Auth(Role.USER)
@Controller('materias')
export class MateriasController{

    constructor(private materiasService: MateriasService){}

    //Obtener todas las materias
    @Get()
    getMaterias(){
        return this.materiasService.getMaterias();
    }

    //OBTENER MATERIAS POR GRADO ESCOLAR
    @Get('grado/:grado')
    async getMateriasGrado(@Param('grado', ParseIntPipe) grado: number): Promise<Materias[]>{
        return await this.materiasService.getMateriasGrado(grado);
    }


    //Obtener una materia por id
    // @Get(':id')
    // getMateriasId(@Param('id', ParseIntPipe) id: number): Promise<Materias>{
    //     return this.materiasService.getMateriasId(id);
    // }

    //OBTENER MATERIAS POR GRUPO ESCOLAR
    // @Get('grado/:grupo')
    // async getMateriasgrupo(@Param('grupo') grupo: string): Promise<Materias[]>{
    //     return await this.materiasService.getMateriasGrupo(grupo);
    // }


    // Obtener un alumno por id
    // @Get(':id')
    // getAlumno(@Param('id', ParseIntPipe) id: number): Promise<Alumno>{
    //     return this.usuariosService.getAlumno(id);
    // }

}