import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
// import { UsuariosService } from "src/usuarios/usuarios.service";
import { Docentes } from "./docentes.entity";
import { Repository } from "typeorm";
import { MateriasService } from "src/materias/materias.service";
import { CreateDocenteDto } from "./dto/createDocente.dto";
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class DocentesService{

    constructor(@InjectRepository(Docentes) private readonly docentesRepository: Repository<Docentes>){}

    getDocentes(){
        return this.docentesRepository.find();
    }

    async create(createDocenteDto: CreateDocenteDto) {
        //verificar que el usuario exista(o no) en la BD
        const user = await this.findOneDocente(createDocenteDto.nombre_docente);
        if(user){
          throw new BadRequestException('Usuario Ya Existe');
        }
        let hash = await bcryptjs.hash(createDocenteDto.password, 10);
        createDocenteDto.password = hash;
        //Si el usuario no existe en la BD, lo registra
        return await this.docentesRepository.save(createDocenteDto);
      }


      //ESTE MÉTODO ES PARA EL LOGIN O PARA BUSCAR
    async findOneDocente(nombre_docente: string) {
        // return await this.docentesRepository.findOneBy({nombreC});
        return await this.docentesRepository.findOneBy({nombre_docente});
    }

}