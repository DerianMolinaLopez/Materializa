import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { VentasController } from './ventas.controller';
import { ProductosModule } from 'src/productos/productos.module';
import { PrismaCliModule } from 'src/common/prisma-cli/prisma-module.module';
import { AutorizacionMiddleware } from 'src/middlewares/cantidad-producto/autorizacion.middleware';
@Module({
  imports: [ProductosModule, PrismaCliModule], // Solo módulos aquí
  controllers: [VentasController],            // Solo controladores aquí
  providers: [VentasService],                 // Servicios de este módulo
})
export class VentasModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(AutorizacionMiddleware).forRoutes({
      path:'ventas',
      method:RequestMethod.POST 
    })
  }
}
