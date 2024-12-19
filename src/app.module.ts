import { Module } from '@nestjs/common';
import { CategoriasModule } from './categorias/categorias.module';
import { PrismaCliModule } from './common/prisma-cli/prisma-module.module';

@Module({
  imports: [CategoriasModule, PrismaCliModule],
  controllers: [],
  providers: [],
})
export class AppModule {}