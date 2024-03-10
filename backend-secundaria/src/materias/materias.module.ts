import { Module } from "@nestjs/common";
import { MateriasService } from "./materias.service";
import { MateriasController } from "./materias.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Materias } from "./materias.entity";
import { UsuariosModule } from '../usuarios/usuarios.module';
import { DocentesModule } from '../docentes/docentes.module'

@Module({
    imports: [TypeOrmModule.forFeature([Materias]), UsuariosModule, DocentesModule],
    providers: [MateriasService],
    controllers: [MateriasController]
})
export class MateriasModule{}