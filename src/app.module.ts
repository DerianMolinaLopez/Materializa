import { Module } from '@nestjs/common';
import { CategoriasModule } from './categorias/categorias.module';
import { PrismaCliModule } from './common/prisma-cli/prisma-module.module';
import { ProductosModule } from './productos/productos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolModule } from './rol/rol.module';

@Module({
  imports: [CategoriasModule, PrismaCliModule, ProductosModule, UsuariosModule, RolModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}