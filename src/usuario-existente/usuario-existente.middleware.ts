import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrismaCliService } from 'src/common/prisma-cli/prisma-cli.service';

@Injectable()
export class VerifyUserMiddleware implements NestMiddleware {
  constructor(private readonly prisma: PrismaCliService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const usuario = await this.prisma.usuario.findUnique({
      where: { id },
    });

    if (!usuario) {
      throw new HttpException('Usuario no encontrado', 404);
    }

    next();
  }
}