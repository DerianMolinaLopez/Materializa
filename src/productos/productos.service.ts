import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { PrismaCliService } from 'src/common/prisma-cli/prisma-cli.service';
import { CategoriasService } from 'src/categorias/categorias.service';

@Injectable()
export class ProductosService {
  constructor( private readonly categoriasService: CategoriasService,
               private readonly prisma:PrismaCliService) {

  }
  async create(createProductoDto: CreateProductoDto) {
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

  findAll() {
    return ;
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
