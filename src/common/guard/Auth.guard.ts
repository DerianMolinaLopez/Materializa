import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken'; // Importa jsonwebtoken correctamente
import { Request } from 'express';
import AuthResponse from '../entities/Auth.entity';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request: AuthResponse = context.switchToHttp().getRequest(); // obtenemos la peticion
    const { cookies } = request; // obtenemos las cookies

    let token = cookies['token']; // Accede a la cookie 'token'
    console.log('Token:', token); // Imprime el token para verificar

    if (!token) {
      throw new UnauthorizedException('No estás autorizado');
    }

    try {
      token = decodeURIComponent(token); // Decodifica el token
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifica el token
      console.log('Decoded:', decoded); // Imprime el token decodificado para verificar
     // request.user = decoded; // Almacena el usuario decodificado en la solicitud
      return true;
    } catch (error) {
      console.error('Error al verificar el token:', error);
      throw new UnauthorizedException('Token inválido');
    }
  }
}