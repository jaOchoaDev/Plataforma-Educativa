import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { LoginDto } from './dto/login.dto';
import * as bcryptjs from 'bcryptjs';
 import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {

    constructor(private readonly usersService: UsuariosService, private readonly jwtService: JwtService){}

    async login({ usuario, password}: LoginDto) {
        //Verificar que el usuario exista en la bd para permitir hacer login
        const user = await this.usersService.findOneByUsuario(usuario);
        //Si el usuario NO existe, manda la exception
        // console.log(user);
        if (!user) {
            throw new UnauthorizedException('Usuario Incorrecto');
        }

        //Si el usuario existe pasa a comparar la contraseña entrante
        //con la almacenada en la bd con hash
        const isPasswordValid = await bcryptjs.compare(password, user.contraseña);
        //si la contraseña es incorrecta, se manda la exception
        // console.log('isPasswordValid: ', isPasswordValid);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Contraseña Incorrecta');
        }
        console.log({success: 'Correcto'});
        //si la contraseña no es incorrecta pasa a generar el jwt
        //Generando el JWT
        const payload = {sub: user.id, username: user.usuario};
        const token = await this.jwtService.signAsync(payload);
        // return {access_token: await this.jwtService.signAsync(payload)}
        return {
            success: 'Login Autorizado: ',
            usuario,
            token,
        };
    }
}
