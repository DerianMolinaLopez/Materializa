import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { ProductosService } from 'src/productos/productos.service';
import { PrismaCliService } from 'src/common/prisma-cli/prisma-cli.service';

import { UpdateVentaDto } from './dto/update-venta.dto';
import { error } from 'console';



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
      for (const producto of productos) {
        const productoEncontrado = await this.productoService.findOne(producto.idProducto);
        if (producto.cantidad > productoEncontrado.existencias) {
          throw new BadRequestException(`El producto ${productoEncontrado.NombreProducto} no tiene suficientes existencias`);
        }
        await this.productoService.update(producto.idProducto, {
          ...productoEncontrado,
          existencias: productoEncontrado.existencias - producto.cantidad,
        });
      }
      return "venta creada con exito"

    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
  async findOne(id:string){
    try{
      const venta= this.prisma.orden.findUnique({
            where:{
              id:id
            }
          })
        if(!venta) throw new BadRequestException("No se encontro la venta")
         return venta
        }catch(error){
      throw new InternalServerErrorException(error.message)
    }
   
  }
  async findMany(id:string){ //normalmente este metodo apunta al detalle de venta
    try{
      const ventas =await this.prisma.ordenesDetalle.findMany({
        where:{
          orden_id:id
        }
      })
      if(ventas.length === 0) throw new BadRequestException("No se encontraron ventas")
        return ventas
    }catch(e){
      error(e)
      throw new InternalServerErrorException(e.message)
    }
  }
  async updateVenta(updateVentaDto: UpdateVentaDto) {
    // 1. Verifico si la venta existe y obtengo sus productos
    const productos = await this.findMany(updateVentaDto.id);
    if (!productos || productos.length === 0) {
      throw new BadRequestException("No se encontraron productos para esta venta.");
    }
  
    const productosActualizados = updateVentaDto.productos;
    const diferenciaVentas: any[] = [];
  
    // 2. Comparo los arreglos para encontrar productos eliminados
    productos.forEach(producto => {
      // Si un producto de la venta original NO está en los productos actualizados, lo agregamos a la diferencia
      if (!productosActualizados.some(p => p.idProducto === producto.product_id)) {
        diferenciaVentas.push(producto);
      }
    });
  
    console.log("Productos eliminados:", diferenciaVentas);
    //antes de eliminar, vamos a incrementar el stock
    for (const producto of diferenciaVentas) {
      const productoEncontrado = await this.productoService.findOne(producto.product_id);
      await this.productoService.update(producto.product_id, {
        ...productoEncontrado,
        existencias: productoEncontrado.existencias + producto.quantity,
      });
    }
    //ahora si ya podemos eliminar esos registro
    await this.prisma.ordenesDetalle.deleteMany({
      where: {
        orden_id: updateVentaDto.id,
        product_id: {
          notIn: productosActualizados.map(p => p.idProducto),
        },
      },
    });
    
    return "probando"
  }
  
 
}
