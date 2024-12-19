import { Module } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';
import { PrismaCliModule } from 'src/common/prisma-cli/prisma-module.module';

@Module({
  imports: [PrismaCliModule], // Asegúrate de que PrismaCliModule esté importado
  providers: [CategoriasService],
  controllers: [CategoriasController],
  exports: [CategoriasService]
})
export class CategoriasModule {}