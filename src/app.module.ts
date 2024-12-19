import { Module } from '@nestjs/common';
import { CategoriasModule } from './categorias/categorias.module';
import { PrismaCliModule } from './common/prisma-cli/prisma-module.module';
import { ProductosModule } from './productos/productos.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [CategoriasModule, PrismaCliModule, ProductosModule, UsuariosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}