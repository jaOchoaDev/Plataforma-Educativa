import { Module } from "@nestjs/common";
import { MateriasService } from "./materias.service";
import { MateriasController } from "./materias.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Materias } from "./materias.entity";
import { UsuariosModule } from "src/usuarios/usuarios.module";

@Module({
    imports: [TypeOrmModule.forFeature([Materias]), UsuariosModule],
    providers: [MateriasService],
    controllers: [MateriasController]
})
export class MateriasModule{}