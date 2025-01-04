import { JwtService } from "@nestjs/jwt";
import { CreateUsuarioDto } from "src/usuarios/dto/create-usuario.dto";
const createToken = async ({ name, email,id,jwt }:
    { name: CreateUsuarioDto["Nombre"], email: CreateUsuarioDto["email"],id:string,jwt:JwtService }) => {
    const payload = { name,email,id }
    return {
        token: jwt.sign(payload),
    }
}
export default createToken;