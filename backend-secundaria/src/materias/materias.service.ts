import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsuariosService } from "src/usuarios/usuarios.service";
import { Materias } from "./materias.entity";
import { Repository } from "typeorm";

@Injectable()
export class MateriasService{

    constructor(@InjectRepository(Materias) private materiasRepository: Repository<Materias>,
        private usuariosService: UsuariosService){}

    getMaterias(){
        return this.materiasRepository.find();
    }

    getMateriasId(id: number) {
        return this.materiasRepository.findOne({
            where: { id }
        });
    }

    getMateriasGrado(grado: number) {
        return this.materiasRepository.find({
            where: {grado}
        });
    }

}