import { HttpException, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

import { PrismaCliService } from 'src/common/prisma-cli/prisma-cli.service';
import { isUUID } from 'class-validator';


@Injectable()
export class UsuariosService {
  constructor(private readonly prisma: PrismaCliService) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    console.log('Datos recibidos:', createUsuarioDto);

    try {
      // Verificar si el usuario ya existe en la base de datos
      const usuarioExistente = await this.prisma.usuario.findUnique({
        where: { email: createUsuarioDto.email },
      });

      if (usuarioExistente) {
        throw new HttpException('Usuario ya existe', 400);
      }
      createUsuarioDto.Nombre = createUsuarioDto.Nombre.toLowerCase();

      // Crear el nuevo usuario
      await this.prisma.usuario.create({
        data: { ...createUsuarioDto },
      });

      return 'Usuario creado con éxito';
    } catch (e) {
      if (e.code === 'P2002') {
        // Error de violación de clave única (por ejemplo, email duplicado)
        throw new HttpException('Usuario ya existe', 400);
      } else {
        console.error('Error en el servidor:', e);
        throw new HttpException('Error en el servidor', 500);
      }
    }
  }

  async findAll() {
    return await this.prisma.usuario.findMany();
  }

  async findOne(id: string) {
    if (isUUID(id)) {
      const usuario = await this.prisma.usuario.findUnique({
        where: { id },
      });
      if (!usuario) {
        throw new HttpException('Usuario no encontrado', 404);
      }
      return usuario;
    }

    if (String(id)) {
      const usuario = await this.prisma.usuario.findFirst({
        where: { Nombre: id },
      });
      if (!usuario) {
        throw new HttpException('Usuario no encontrado', 404);
      }
      return usuario;
    }

    throw new HttpException('Parámetro de búsqueda no válido', 400);
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    return this.prisma.usuario.update({
      where: { id },
      data: { ...updateUsuarioDto },
    });
  }

  async remove(id: string) {
    return this.prisma.usuario.delete({
      where: { id },
    });
  }
}