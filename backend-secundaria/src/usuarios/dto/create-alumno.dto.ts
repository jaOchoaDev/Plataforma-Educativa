import { Transform } from 'class-transformer';
import { IsNumber, IsString, Min, MinLength, MaxLength, Max, IsEmpty, IsNotEmpty, IsInt } from 'class-validator';

export class CreateAlumnoDto {

    @Transform(({value}) => value.trim())
    @IsNotEmpty()
    @IsString()
    @MaxLength(45)
    nombre: string;

    @Transform(({value}) => value.trim())
    @IsNotEmpty()
    @IsString()
    @MaxLength(45)
    apellido_paterno: string;

    @Transform(({value}) => value.trim())
    @IsNotEmpty()
    @IsString()
    @MaxLength(45)
    apellido_materno: string;

    @Transform(({value}) => value.trim())
    @IsNotEmpty()
    @IsString()
    @MaxLength(15)
    @MinLength(4)
    usuario: string;

    @Transform(({value}) => value.trim())
    @IsNotEmpty()
    @IsString()
    @MaxLength(8)
    @MinLength(4)
    password: string;

    // @Transform(({value}) => value.trim())
    @IsNotEmpty()
    @IsNumber()
    @IsInt()
    @Min(1)
    @Max(3)
    grado: number;

    @Transform(({value}) => value.trim())
    @IsNotEmpty()
    @IsString()
    taller: string;

    @Transform(({value}) => value.trim())
    @IsNotEmpty()
    @IsString()
    @MaxLength(1)
    grupo: string;

    // @IsString()
    // rol: string;

}