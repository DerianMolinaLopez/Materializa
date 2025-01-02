import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaCliService } from 'src/common/prisma-cli/prisma-cli.service';
import { roles, categorias, productos, usuarios } from './data/index';

@Injectable()
export class SeedService {
  constructor(private readonly prisma: PrismaCliService) {}

  async seed() {
    try {
      this.prisma.onModuleInit();
      // Como las inserciones aquí importan, tendremos que ser secuenciales
      await this.deleteAllProducts();
      await this.prisma.categoria.createMany({ data: categorias });
      await this.prisma.rol.createMany({ data: roles });
      await this.prisma.producto.createMany({ data: productos });
      await this.prisma.usuario.createMany({ data: usuarios });
      this.prisma.onModuleDestroy()
      return "Seeding completado";
    } catch (e) {
      console.log(e);
      this.handleError();
    }
  }

  async deleteAllProducts() {
    try {
      await this.prisma.producto.deleteMany({});
      await this.prisma.usuario.deleteMany({});
      await this.prisma.rol.deleteMany({});
      await this.prisma.categoria.deleteMany({});
    } catch (e) {
      console.log(e);
      this.handleError();
    }
  }

  private handleError() {
    throw new InternalServerErrorException("Error al borrar los productos");
  }
}