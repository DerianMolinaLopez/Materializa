import { Injectable } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { PrismaCliService } from 'src/common/prisma-cli/prisma-cli.service';
import {v4 as uuid} from "uuid"
@Injectable()
export class RolService {
  constructor (private readonly prisma:PrismaCliService){}
  async create(createRolDto: CreateRolDto) {
    await this.prisma.rol.create({
      data:{
        id:uuid(),
        name:createRolDto.name
      }
    })
    return 'Rol creado con exito';
  }

  async findAll() {
    return await this.prisma.rol.findMany();
  }

 async  findOne(id: string) {
    return await this.prisma.rol.findUnique({
      where:{
        id:id
      }
    })
  }

  async remove(id: string) {
    return await this.prisma.rol.delete({
      where:{
        id:id
      }
    });
  }
}
