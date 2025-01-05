import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Creación de la aplicación
  
  app.setGlobalPrefix('api'); // Prefijo de la API como texto
  app.useGlobalPipes(new ValidationPipe({ // Uso de pipes para transformación de data
    whitelist: true,
    forbidNonWhitelisted: true,
  }));
    app.enableCors({
      origin:'http://localhost:5173',
      credentials:true
    })
 /*  app.use(cors({ // Configuración de CORS
    origin: 'http://localhost:5173', // Cambia esto a tu origen permitido
    credentials: true,
  }));*/

  app.use(cookieParser()); // Implementamos cookie-parser
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();