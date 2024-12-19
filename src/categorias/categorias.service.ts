import { BadGatewayException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { PrismaCliService } from 'src/common/prisma-cli/prisma-cli.service';
import { isUUID } from 'class-validator';

@Injectable()
export class CategoriasService {
  constructor(private readonly prisma:PrismaCliService){

  }
  async create(createCategoriaDto: CreateCategoriaDto) {
    try{
      await this.prisma.categoria.create({
        data:createCategoriaDto
      })
      return 'Categoria creada con exito';
    }catch(e){

      if(e.code === 'P2002'){//codigo de error de prisma
        throw new BadGatewayException('La categoria ya existe')
      }else{
        throw new BadGatewayException('Error en el servidor')
    
      }
    }
  }

  

  async findAll() {
    return await this.prisma.categoria.findMany();
  }

  async findOne(id:string) {
    try{
      if(isUUID(id)){//busqueda por medio de un id
            return await this.prisma.categoria.findUnique({
              where:{
                idCategoria:id
              }
            })
          }
      if(isNaN(+id)){//busqueda por medio de un hombre
        const categoria = await this.prisma.categoria.findFirst({
          where:{
            NombreCategorias:id
          }
        }) 
        if(!categoria) throw new NotFoundException('La categoria no existe')
          return categoria
      }

      throw new BadGatewayException('El parametro de busqueda no es valido')
    }catch(e){
      console.log(e)
      return "Error en el sevidor"
    }
    


  }

  async update(id: string, updateCategoriaDto: UpdateCategoriaDto) {
  
    if(this.findOne(id.toString())){
      await this.prisma.categoria.update({
      where:{
        idCategoria:id.toString()
      },
      data:{
        ...updateCategoriaDto//actualzamos los datos con lo que venga de mi DTO
      }
    })
    }
    return 'Categoria actualizada con exito'; 
  }

  remove(id: string) {
    if(this.findOne(id.toString())){
      this.prisma.categoria.delete({
        where:{
          idCategoria:id.toString()
        }
      })
    }
    return 'Categoria eliminada con exito';
  }
}
