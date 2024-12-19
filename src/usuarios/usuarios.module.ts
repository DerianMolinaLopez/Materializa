import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { PrismaCliModule } from 'src/common/prisma-cli/prisma-module.module';
//!mas adelante va a aumentar las importaciones
//!ya que estos usuarios son quienes pueden hacer las
//!ventas de los productos
@Module({
  imports: [PrismaCliModule],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
