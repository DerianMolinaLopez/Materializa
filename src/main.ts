import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);//creacion de la aplicacion
  app.setGlobalPrefix('api');//perifo de la api como texto
  app.useGlobalPipes(new ValidationPipe({//uso de pipes para transformacion de data
    whitelist:true,
    forbidNonWhitelisted:true,
  }));
  app.use(cookieParser());//implementamos
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
