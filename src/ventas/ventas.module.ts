import { Module } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { VentasController } from './ventas.controller';
import { ProductosModule } from 'src/productos/productos.module';
import { PrismaCliModule } from 'src/common/prisma-cli/prisma-module.module';
@Module({
  controllers: [VentasController],
  providers: [VentasService],
  imports: [ProductosModule,PrismaCliModule],
})
export class VentasModule {}
