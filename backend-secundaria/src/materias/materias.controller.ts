import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { MateriasService } from "./materias.service";
import { Materias } from "./materias.entity";

@Controller('materias')
export class MateriasController{

    constructor(private materiasService: MateriasService){}

    @Get()
    getMaterias(){
        return this.materiasService.getMaterias();
    }

    @Get(':id')
    getMateriasId(@Param('id', ParseIntPipe) id: number): Promise<Materias>{
        return this.materiasService.getMateriasId(id);
    }
    // Obtener un alumno por id
    // @Get(':id')
    // getAlumno(@Param('id', ParseIntPipe) id: number): Promise<Alumno>{
    //     return this.usuariosService.getAlumno(id);
    // }

}