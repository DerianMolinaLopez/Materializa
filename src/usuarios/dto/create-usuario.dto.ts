import { IsEmail, IsString, IsUUID, MinLength } from "class-validator";

export class CreateUsuarioDto {
@IsString()
@MinLength(5)
Nombre:string;
@IsString()
@MinLength(5)
Apellidos:string;
@IsEmail()
@MinLength(5)
email:string;
@IsString()
@MinLength(5)
password:string;
@IsString()
@IsUUID()
role:string;

}
