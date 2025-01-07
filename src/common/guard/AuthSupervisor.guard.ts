import { BadRequestException, CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

import * as jwt from 'jsonwebtoken';
import AuthResponse from '../entities/Auth.entity';
import { PrismaCliService } from '../prisma-cli/prisma-cli.service';
import UsuarioAuth from '../entities/UsuarioAuth.entity';
import Roles from 'src/Enum/Roles';


@Injectable()
export class AuthGuardSupervisor implements CanActivate {
  constructor(private  readonly prisma:PrismaCliService) {}
  async canActivate(context: ExecutionContext): Promise<boolean>  {
    const request: AuthResponse = context.switchToHttp().getRequest(); 
    const { headers } = request; 
    if(!headers.cookie) throw new BadRequestException('No tienes un token para autorizarte');
    const token =headers.cookie.split('=')[1]; //separamos las partes del token
    //verificamos quien es el usuario

    if (!token) {
      throw new UnauthorizedException('No estás autorizado');
    }

    try {
    //  token = decodeURIComponent(token); // Decodifica el token
      const decoded  = jwt.verify(token, process.env.JWT_SECRET);

      if(typeof decoded === 'object'){
        const usuario:UsuarioAuth ={
          id:decoded.id,
          email:decoded.email,
          role:decoded.role
        }
        const valido = await this.prisma.rol.findUnique({
          where:{
            id:usuario.role
          }
        })
        //SOLAMENTE HAY DOS ROLES, ASI QUE CON EL NUEVO QUE AGREGYEMOS
        //DEBERA REGRESAR UN FALSE
        //s
        // if(valido.name === Roles.ENCARDADO  ) return true
        if(valido.name !== Roles.ENCARDADO) throw new UnauthorizedException('Solo los encargados pueden modificar ventas ya realizadas');
        return true
      }else{
           return false
      }
   

    } catch (error) {
      console.error('Error al verificar el token:', error);
      throw new UnauthorizedException(error.message);
    }
  }
}