import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MateriasModule } from './materias/materias.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      // password: 'password',
      password: 'ochoaayala',
      database: 'secundaria',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsuariosModule,
    // UsersModule,
    AuthModule,
    MateriasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
