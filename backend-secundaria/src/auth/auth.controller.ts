import { Body, Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';
import { Request } from 'express';
import { Roles } from './decorators/roles.decorator';
import { RolesGuard } from './guard/roles.guard';
import { Role } from './enums/rol.enum';
import { Auth } from './decorators/auth.decorator';

interface RequestWithUser extends Request{
    user: {
        usuario: string;
        rol: string;
    }
}

//Endpoint para iniciar sesión http://localhost:3000/auth
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}

    @Post('login')
    login(@Body() loginDto: LoginDto){
        console.log('datos recibidos del f al back: ', loginDto);
        
        return this.authService.login(loginDto);
    }


    // @Get('profile')
    // @Roles(Role.ADMIN)
    // @UseGuards(AuthGuard, RolesGuard)
    // profile(
    //     @Req() req: RequestWithUser){
    //     return req.user;
    // }

    @Get('profile')
    @Auth(Role.ADMIN)
    profile(
        @Req() req: RequestWithUser){
        return req.user;
    }

    //Prueba para ver si así se da acceso a los usuarios logeados con rol de user
    // @Get('alumnos')
    // @Roles('user')
    // @UseGuards(AuthGuard, RolesGuard)
    // alumnos(
    //     @Req() req: RequestWithUser){
    //     return {redirectTo: '/Alumnos'};
    // }

}
