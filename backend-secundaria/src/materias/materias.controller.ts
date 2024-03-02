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

    //Obtener una materia por id
    @Get(':id')
    getMateriasId(@Param('id', ParseIntPipe) id: number): Promise<Materias>{
        return this.materiasService.getMateriasId(id);
    }


    //OBTENER MATERIAS POR GRADO ESCOLAR
    @Get('grado/:grado')
    getMateriasgRADO(@Param('grado', ParseIntPipe) grado: number): Promise<Materias[]>{
        return this.materiasService.getMateriasGrado(grado);
    }


    // Obtener un alumno por id
    // @Get(':id')
    // getAlumno(@Param('id', ParseIntPipe) id: number): Promise<Alumno>{
    //     return this.usuariosService.getAlumno(id);
    // }

}