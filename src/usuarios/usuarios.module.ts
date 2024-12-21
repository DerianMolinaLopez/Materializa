import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { PrismaCliModule } from 'src/common/prisma-cli/prisma-module.module';
import { VerifyUserMiddleware } from 'src/usuario-existente/usuario-existente.middleware';

//!mas adelante va a aumentar las importaciones
//!ya que estos usuarios son quienes pueden hacer las
//!ventas de los productos
@Module({
  imports: [PrismaCliModule],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {
  configure(consumer:MiddlewareConsumer){
    consumer.apply(VerifyUserMiddleware)//señalo que middleware voy a usar
    .forRoutes(
      { path: 'usuarios/:id', method: RequestMethod.PATCH },
      { path: 'usuarios/:id', method: RequestMethod.DELETE },
    );// y las rutas ene specifico en el que va a apuntar el middleware
  }
}
