import { Controller, Get } from "@nestjs/common";
import { MateriasService } from "./materias.service";

@Controller('materias')
export class MateriasController{

    constructor(private materiasService: MateriasService){}

    @Get()
    getAlumnos(){
        return this.materiasService.getMaterias();
    }

    // Obtener un alumno por id
    // @Get(':id')
    // getAlumno(@Param('id', ParseIntPipe) id: number): Promise<Alumno>{
    //     return this.usuariosService.getAlumno(id);
    // }

}