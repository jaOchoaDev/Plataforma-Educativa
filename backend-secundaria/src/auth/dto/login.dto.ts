import { Transform } from "class-transformer";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class LoginDto{
    @Transform(({value}) => value.trim())
    @IsNotEmpty()
    @IsString()
    @MaxLength(15)
    @MinLength(4)
    usuario: string;

    @Transform(({value}) => value.trim())
    // @IsNotEmpty()
    @IsString()
    @MaxLength(8)
    @MinLength(4)
    contraseña: string;
}