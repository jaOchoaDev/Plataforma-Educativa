import { Body, Controller, Get, Post, UseGuards, Request, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';
// import { Request } from 'express';

//Endpoint para iniciar sesión http://localhost:3000/auth
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}

    @Post('login')
    login(@Body() loginDto: LoginDto, @Res() res: Response){
        console.log('datos recibidos en el back: ', loginDto);
        
        // console.log('tok: ', tok);
        return this.authService.login(loginDto);
        // return res.json({ token, redirectTo: 'Alumnos'});
    }

    @Get('profile')
    @UseGuards(AuthGuard)
    profile(
        @Request() req ){
        return req.user;
        // return 'Perfil Correcto';
    }

}
