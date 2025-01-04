import { forwardRef, Module } from '@nestjs/common';
import { PrismaCliService } from './prisma-cli.service';

import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  providers: [PrismaCliService],
  exports: [PrismaCliService],
  imports : [forwardRef(()=>UsuariosModule) ]
})

export class PrismaCliModule {}