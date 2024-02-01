import { Module } from '@nestjs/common';
import { DocentesService } from './docentes.service';
import { DocentesController } from './docentes.controller';
import { Docentes } from './docentes.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Docentes])],
    providers: [DocentesService],
    controllers: [DocentesController],
    exports: [DocentesService]
})
export class DocentesModule {}
