import { Injectable, HttpException, HttpStatus, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Alumno } from './usuarios.entity';
import { Repository } from 'typeorm';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import * as bcrypt from 'bcryptjs';
import { Docentes } from 'src/docentes/docentes.entity';
// import { UpdateAlumnoDto } from './dto/update-alumno.dto';

@Injectable()
export class UsuariosService {
  
  constructor(@InjectRepository(Alumno) private readonly alumnoRepository: Repository<Alumno>,
              @InjectRepository(Docentes) private readonly docentesRepository: Repository<Docentes>
  ) {}

  //otro metodo para crear alumnos usando asyn
  // async createAlumnos(alumno: Alumno): Promise<Alumno>{
  //   return await this.alumnoRepository.save(alumno);
  // }

  //Crear o agregar alumnos, el bueno
  // createAlumnos(alumno: CreateAlumnoDto){

  //Hash de la contraseña(example)
  // const hash = await bcrypt.hash(password, saltOrRounds);

  //este método también jala ---------------------usando actualmente
  async create(createUserDto: CreateAlumnoDto) {
    //verificar que el usuario exista(o no) en la BD
    console.log(createUserDto);
    const user = await this.findOneByUsuario(createUserDto.usuario);
    if(user){
      throw new BadRequestException('Usuario Ya Existe');
    }
    try {
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      createUserDto.password = hashedPassword;
      // Resto de la lógica aquí
    } catch (error) {
      console.error('Error al hacer el hash de la contraseña:', error);
      // Puedes lanzar una excepción o manejar el error de alguna manera
    }
    
    
    //Si el usuario no existe en la BD, lo registra
    return await this.alumnoRepository.save(createUserDto);
  }
    
    

    //este si jala, es el bueno, sin async
    // const newAlumno = this.alumnoRepository.create(alumno);
    // return this.alumnoRepository.save(newAlumno);
  // }

   //-----------------------------------------------------------------------------
  //ESTE MÉTODO ES PARA EL LOGIN O PARA BUSCAR
  async findOneByUsuario(usuario: string){
    return await this.alumnoRepository.findOneBy({usuario});
  }


  //Para docentes
  async findOneDocente(usuario: string){
    return await this.docentesRepository.findOneBy({nombre_docente: usuario});
  }


  //----------------------------------------------------
  //Obtener Un solo alumno pero con usuario/n.control
  getUsuario(usuario: string){
    return this.alumnoRepository.findOne({
      where: {usuario}
    });
  }
  //----------------------------------------------------

  //Obtener todos los alumnos
  getAlumnos(){
    return this.alumnoRepository.find();
  }

}

  

  //Obtener Un solo alumno
  // getAlumno(id:number){
  //   return this.alumnoRepository.findOne({
  //     where: {id}
  //   });
  // }


  
  //Actualizar alumnos
  // updateAlumnos(id: number, alumno: UpdateAlumnoDto){
  //   return this.alumnoRepository.update({id}, alumno);
  // }

  //----------------------------------------------------
  //Actualizar alumnos con usuario/n.control
  // updateAlumnos(usuario: string, alumno: UpdateAlumnoDto){
  //   return this.alumnoRepository.update({usuario}, alumno);
  // }
  //----------------------------------------------------

  //Eliminar alumnos
  // deleteAlumno(id: number){
  //   return this.alumnoRepository.delete({id});
  // }

  //----------------------------------------------------
  //Eliminar alumnos con usuario/n.control
  // deleteAlumno(usuario:string){
  //   return this.alumnoRepository.delete({usuario});
  // }
  //----------------------------------------------------
