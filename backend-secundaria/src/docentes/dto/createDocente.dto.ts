import { Transform } from 'class-transformer';
import { IsNumber, IsString, Min, MinLength, MaxLength, Max, IsEmpty, IsNotEmpty, IsInt } from 'class-validator';
import { Role } from 'src/common/enums/rol.enum';

export class CreateDocenteDto {

    //el nombre funciona como el usuario
    @Transform(({value}) => value.trim())
    @IsNotEmpty()
    @IsString()
    @MaxLength(45)
    nombre_docente: string;

    @Transform(({value}) => value.trim())
    @IsNotEmpty()
    @IsString()
    @MaxLength(8)
    @MinLength(4)
    password: string;

    //Esta se pone cuando se quiere agregar otro DOCENTE que no sea de rol profesor
    // @IsString()
    // rol: Role;

}