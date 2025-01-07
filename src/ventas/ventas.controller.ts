import { Body, Controller, Patch, Post, UseGuards } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { CreateVentaDto } from './dto/create-venta.dto';
import { AuthGuard } from 'src/common/guard/Auth.guard';

import { UpdateVentaDto } from './dto/update-venta.dto';

@Controller('ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}
  //creacion de una venta
  @UseGuards(AuthGuard)
  @Post()
   crearVenta(@Body() createVentaDto: CreateVentaDto) {
    return this.ventasService.create(createVentaDto);
   }
   @Patch()
  // @UseGuards(AuthGuard)
   async cncelacionVenta(@Body() UpdateVentaDto: UpdateVentaDto){//este metodo es pensado para una devolucion, el id viene incluido en el dto
     return this.ventasService.updateVenta(UpdateVentaDto)
   }

}
