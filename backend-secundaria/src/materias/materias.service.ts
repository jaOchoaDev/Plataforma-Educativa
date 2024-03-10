import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsuariosService } from "src/usuarios/usuarios.service";
import { Materias } from "./materias.entity";
import { Repository } from "typeorm";

@Injectable()
export class MateriasService{

    constructor(@InjectRepository(Materias) private materiasRepository: Repository<Materias>){}

    getMaterias(){
        return this.materiasRepository.find();
    }

    async getMateriasGrado(grado: number) {
        console.log('entro aqui');
        return await this.materiasRepository.find({
            where: {grado}
        });
    }


    // getMateriasId(id: number) {
    //     return this.materiasRepository.findOne({
    //         where: { id }
    //     });
    // }

    // async getMateriasGrupo(grupo: string) {
    //     console.log('entro aqui a sacar grupo');
    //     return await this.materiasRepository.findOne({
    //         where: {grupo}
    //     });
    // }

}