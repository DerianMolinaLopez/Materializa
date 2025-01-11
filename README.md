<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>


VentasApi
El proyecto tiene como objetivo la experimentacion del entonro de desarrollo de NestJs para 
llevar a cabo una api de ejemplo
 - API RESTful para la gestión de ventas de productos.
 - El objetivo es probar y realizar una serie de practicas con nestjs y prismaorm.
 - Se implementa un CRUD para la gestión de ventas de productos.
 - Se implementa un sistema de autenticación con JWT.
 - Se implementa un sistema de roles y permisos.
 - Se implementa un sistema de paginación y filtros.

## Instalacion
1. Clonar el repositorio.
2. Instalar las dependencias con `npm install`.
3. crear un archivo `.env` en la raiz del proyecto y agregar las siguientes variables de entorno:
```
DATABASE_URL
SECRET_KET 
JWT_SECRET 
```
4. Ejecutar el el contenedor de docker para levatar la base de datos
```
docker-compose up
```
5. Endpoint para hacer un seed a la base de datos 
```
POST http://localhost:3000/seed
```

