import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
// import { UsuariosService } from "src/usuarios/usuarios.service";
import { Docentes } from "./docentes.entity";
import { Repository } from "typeorm";
import { MateriasService } from "src/materias/materias.service";

@Injectable()
export class DocentesService{

    constructor(@InjectRepository(Docentes) private docentesRepository: Repository<Docentes>){}

    getDocentes(){
        return this.docentesRepository.find();
    }

}