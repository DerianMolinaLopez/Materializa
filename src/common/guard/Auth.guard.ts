import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

import * as jwt from 'jsonwebtoken';
import AuthResponse from '../entities/Auth.entity';
import { PrismaCliService } from '../prisma-cli/prisma-cli.service';
import UsuarioAuth from '../entities/UsuarioAuth.entity';



@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private  readonly prisma:PrismaCliService) {}
  async canActivate(context: ExecutionContext): Promise<boolean>  {
    const request: AuthResponse = context.switchToHttp().getRequest(); 
    const { headers } = request; 
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
 
        if(valido.id === usuario.role) return true
      }else{
           return false
      }
   

    } catch (error) {
      console.error('Error al verificar el token:', error);
      throw new UnauthorizedException('Token inválido');
    }
  }
}