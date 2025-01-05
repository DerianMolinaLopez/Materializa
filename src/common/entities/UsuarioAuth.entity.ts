import { IsEmail, IsUUID } from "class-validator";

export default class  UsuarioAuth{
    @IsUUID()
    id:string;
    @IsEmail()
    email:string;
    @IsUUID()
    role:string;
}