import { BadGatewayException } from "@nestjs/common";
import { isUUID } from "class-validator";
import { PrismaCliService } from "src/common/prisma-cli/prisma-cli.service";

const usuairoAuth =async  (id:string,prisma:PrismaCliService)=>{
  if(!isUUID(id)) throw new BadGatewayException('El id no es valido, verifica el formato')
    return await prisma.usuario.findUnique({
        where:{
            id
        }
    })
}
export default usuairoAuth