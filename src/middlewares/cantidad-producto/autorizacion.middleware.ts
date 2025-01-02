import { BadGatewayException, Injectable, NestMiddleware } from '@nestjs/common';
import { PrismaCliService } from 'src/common/prisma-cli/prisma-cli.service';
import usuairoAuth from './helpers/Auth.helpers';
@Injectable()
export class AutorizacionMiddleware implements NestMiddleware {
  constructor (private readonly prisma: PrismaCliService) {}
  use(req: any, res: any, next: () => void) {
    if(!usuairoAuth(req.body.usuario,this.prisma)) throw new BadGatewayException('El usuario no es valido')
    next();
  }
}
