import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { PrismaCliService } from 'src/common/prisma-cli/prisma-cli.service';
import { CategoriasService } from 'src/categorias/categorias.service';
import { isUUID } from 'class-validator';

@Injectable()
export class ProductosService {
  constructor( private readonly categoriasService: CategoriasService,
               private readonly prisma:PrismaCliService) {

  }
  async create(createProductoDto: CreateProductoDto) {
    console.log(createProductoDto)
    try{
             //verificamos que la categoria del producto exista
        if(this.categoriasService.findOne(createProductoDto.CategoriaID)){
         //si existe entonces vamos a mandar la creacion del prodcuto
         await this.prisma.producto.create({
           data:createProductoDto
         })
        }
       
       return "Producto creado con exito"
   
       }catch(e){
        if(e.code === 'P2002'){//codigo de error de prisma
                throw new BadGatewayException('El producto ya existe')
         }else{
           throw new BadGatewayException('Error en el servidor')
       
         }
         
       }
  }

  async findAll() {
    return await this.prisma.producto.findMany();
  }

  async findOne(id: string) {//como estandar este metodo se manda como otros
    try{
      //id
      if(isUUID(id)){
        const producto = this.prisma.producto.findUnique({
          where:{
            id:id
          }
        })
        return producto
      }
      //nombre
      if(typeof id === 'string'){
        const producto = this.prisma.producto.findUnique({
          where:{
            NombreProducto:id
          }
        })
        return producto
      }
      
    }catch(e){
       if(e.code === 'P2016'){
         throw new BadGatewayException('Producto no encontrado')
       }
       throw new BadGatewayException('Error en el servidor')
    }
  }

  async update(id: string, updateProductoDto: UpdateProductoDto) {
    const producto = this.findOne(id.toString())
    if(producto){
      return this.prisma.producto.update({
        where:{
          id:id
        },
        data:updateProductoDto
      })
    
    }
     return "Producto actualizado con exito"
    }
  
  

  async remove(id: string) {
    await this.prisma.producto.delete({
      where:{
        id:id
      }
     })
    return `El producto fue eliminado`;
  }

  
}
