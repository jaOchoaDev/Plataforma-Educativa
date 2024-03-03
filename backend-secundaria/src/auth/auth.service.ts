import { Injectable, UnauthorizedException } from '@nestjs/common';
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
        const user = await this.usersService.findOneByUsuario(usuario);
        
        //-----LOGICA PARA UE TAMBIÉN HAGA LOGIN DE DOCENTES


        //--------------------.----------------

        //Si el usuario NO existe, manda la exception
        // console.log('user: ', user);
        if (!user) {
            throw new UnauthorizedException('Usuario Incorrecto');
        }

        //Si el usuario existe pasa a comparar la contraseña entrante
        //con la almacenada en la bd con hash
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        //si la contraseña es incorrecta, se manda la exception
        // console.log('isPasswordValid: ', isPasswordValid);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Contraseña Incorrecta');
        }
        console.log({success: 'Correcto'});
        //si la contraseña no es incorrecta pasa a generar el jwt
        //Generando el JWT
        const payload = {sub: user.id, username: user.usuario, rol: user.rol};
        const token = await this.jwtService.signAsync(payload);
        const loggedIn = true;
        const gr = user.grado;
        const r = user.rol;
        
        return {
            success: 'Login Autorizado: ',
            usuario,
            token,
            loggedIn,
            gr,
            r
        };
    }

    async profile({usuario, rol}: {usuario: string; rol: string}){
        return await this.usersService.findOneByUsuario(usuario);
    }

}
