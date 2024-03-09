import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from './usuarios.entity';
import { Docentes } from 'src/docentes/docentes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Alumno, Docentes])],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService]
})
export class UsuariosModule {}
