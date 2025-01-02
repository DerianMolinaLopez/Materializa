import { Body, Controller, Post } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { CreateVentaDto } from './dto/create-venta.dto';

@Controller('ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}
  //creacion de una venta
  @Post()
   crearVenta(@Body() createVentaDto: CreateVentaDto) {
    return this.ventasService.create(createVentaDto);
   }
}
