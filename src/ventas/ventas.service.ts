import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { ProductosService } from 'src/productos/productos.service';
import { PrismaCliService } from 'src/common/prisma-cli/prisma-cli.service';



@Injectable()
export class VentasService {
  constructor(private readonly productoService: ProductosService,
              private readonly  prisma:PrismaCliService
  ){}
  async create(createVentaDto: CreateVentaDto) {
    const productos = createVentaDto.productos
    const promesasArrayCreacion: ReturnType<typeof this.prisma.ordenesDetalle.create>[] = []
    //const promesasArrayStock: ReturnType<typeof this.productoService.update>[] = []
    try{
      //primero creamos la venta
      const orden = await this.prisma.orden.create({ //creacion de la orden
        data:{
          usuario: {
            connect: {
              id: createVentaDto.usuario
            }
          }
        }
      })
      //creacion de la orden de la venta, como es un array de productos tendremos que hacer una insercion de venta por cada porducto
      productos.forEach((producto) =>{
       const promesa = this.prisma.ordenesDetalle.create({
          data:{
            orden_id:orden.id,
            product_id:producto.idProducto,
            quantity:producto.cantidad,
            SubTotal:producto.subtotal
          }
        })
        promesasArrayCreacion.push(promesa)
      })

      await Promise.all(promesasArrayCreacion)//mandamos la insercion de todas esas ventas
      //luego actualizamos el stock
      //tenemos un array de productos que ya fueron insertados, hay que modificar el stock de cada uno de esos productos
      productos.forEach(async(producto) =>{
        const prodcuto = await this.productoService.findOne(producto.idProducto)
        await this.productoService.update(producto.idProducto,{
          ...prodcuto,
          existencias: prodcuto.existencias - producto.cantidad
        })
      })
      return "venta creada con exito"

    }catch(error){
      console.log(error)
      throw new InternalServerErrorException("Error al crear la venta")
    }
    console.log(createVentaDto)
    
    return 'This action adds a new venta';
  }
}
