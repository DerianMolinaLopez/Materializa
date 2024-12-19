import { Module } from '@nestjs/common';
import { CategoriasModule } from './categorias/categorias.module';
import { PrismaCliModule } from './common/prisma-cli/prisma-module.module';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [CategoriasModule, PrismaCliModule, ProductosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}