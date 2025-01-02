import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { PrismaCliModule } from 'src/common/prisma-cli/prisma-module.module';
import { PrismaCliService } from 'src/common/prisma-cli/prisma-cli.service';
import { CategoriasModule } from 'src/categorias/categorias.module';
@Module({
  imports: [PrismaCliModule,CategoriasModule],
  exports: [ProductosService],
  controllers: [ProductosController],
  providers: [ProductosService,PrismaCliService],
})
export class ProductosModule {}
