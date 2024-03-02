import { Body, Controller, Get, HttpException, HttpStatus, Post } from "@nestjs/common";
import { DocentesService } from "./docentes.service";
import { CreateDocenteDto } from "./dto/createDocente.dto";

@Controller('docentes')
export class DocentesController{

    constructor(private docentesService: DocentesService){}


    //metodo para registrar docentes
    @Post(':registrar')
    async save(@Body() newDocente: CreateDocenteDto){
        // console.log('Datos recibidos del front: ', newAlumno);
        return await this.docentesService.create(newDocente).then(res => {
            return { success: true, data: res}            
        }).catch(error => {
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
        })
    }

    //Obtener todos los docentes
    @Get()
    getDocentes(){
        return this.docentesService.getDocentes();
    }


}