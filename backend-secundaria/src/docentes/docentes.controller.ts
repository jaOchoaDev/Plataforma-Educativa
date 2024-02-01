import { Controller, Get } from "@nestjs/common";
import { DocentesService } from "./docentes.service";

@Controller('docentes')
export class DocentesController{

    constructor(private docentesService: DocentesService){}

    @Get()
    getDocentes(){
        return this.docentesService.getDocentes();
    }

    // Obtener un alumno por id
    // @Get(':id')
    // getAlumno(@Param('id', ParseIntPipe) id: number): Promise<Alumno>{
    //     return this.usuariosService.getAlumno(id);
    // }

}