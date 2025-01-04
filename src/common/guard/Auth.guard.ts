import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import {Request} from 'express'
@Injectable()
export class AuthGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request:Request = context.switchToHttp().getRequest();//obtenemos la peticion
        const  {cookies} = request;//obtenemos las cookies
        console.log('Request:',cookies.token)
        return true
    }

}