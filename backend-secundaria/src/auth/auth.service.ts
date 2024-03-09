import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { LoginDto } from './dto/login.dto';
import * as bcryptjs from 'bcryptjs';
 import { JwtService } from "@nestjs/jwt";
import { DocentesService } from 'src/docentes/docentes.service';

@Injectable()
export class AuthService {

    constructor(private readonly usersService: UsuariosService, private readonly jwtService: JwtService){}

    async login({ usuario, password}: LoginDto) {
        console.log('datos recibidos en el service del b: ', usuario, password);
        //Verificar que el usuario exista en la bd para permitir hacer login

        let user;

        user = await this.usersService.findOneByUsuario(usuario);
        
        if(!user){
            user = await this.usersService.findOneDocente(usuario);
        }
        //-----LOGICA PARA UE TAMBIÉN HAGA LOGIN DE DOCENTES


        //--------------------.----------------

        //Si el usuario NO existe, manda la exception
        // console.log('user: ', user);
        if (!user) {
            throw new HttpException('Usuario Incorrecto', HttpStatus.BAD_REQUEST);
        }

        //Si el usuario existe pasa a comparar la contraseña entrante
        //con la almacenada en la bd con hash
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        //si la contraseña es incorrecta, se manda la exception
        // console.log('isPasswordValid: ', isPasswordValid);
        if (!isPasswordValid) {
            throw new HttpException('Contraseña incorrecta', HttpStatus.BAD_REQUEST);
        }
        console.log({success: 'Correcto'});
        //si la contraseña no es incorrecta pasa a generar el jwt
        //Generando el JWT
        const payload = {rol: user.rol, sub: user.id, username: !user.usuario ? user.nombre_docente : user.usuario };
        const token = await this.jwtService.signAsync(payload);
        const loggedIn = true;
        const gr = user.grado;
        const rol = user.rol;
        
        return {
            success: 'Login Autorizado: ',
            usuario,
            token,
            loggedIn,
            gr,
            rol
        };
    }

    async profile({usuario, rol}: {usuario: string; rol: string}){
        return await this.usersService.findOneByUsuario(usuario);
    }

}
