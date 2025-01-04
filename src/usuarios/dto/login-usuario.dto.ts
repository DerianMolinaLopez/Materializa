import { IsEmail, IsString, NotEquals } from "class-validator";

export default class LoginUsuarioDto {
    @IsEmail()
    @NotEquals('',{message:'El email no puede estar vacio'})
    email: string;
    @IsString()
    @NotEquals('',{message:'El password no puede estar vacio'})
    password: string;
}