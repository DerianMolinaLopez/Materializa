import { JwtService } from "@nestjs/jwt";
import { CreateUsuarioDto } from "src/usuarios/dto/create-usuario.dto";
const createToken = async ({ name, email,role,id,jwt }:
    { name: CreateUsuarioDto["Nombre"], email: CreateUsuarioDto["email"],id:string,jwt:JwtService,role:string }) => {
    const payload = { name,email,role,id }
    return {
        token: jwt.sign(payload),
    }
}
export default createToken;