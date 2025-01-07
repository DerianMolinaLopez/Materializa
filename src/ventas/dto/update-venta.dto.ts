import { PartialType } from '@nestjs/mapped-types';
import { CreateVentaDto } from './create-venta.dto';
import { IsUUID } from 'class-validator';

export class UpdateVentaDto extends PartialType(CreateVentaDto) {
    @IsUUID() 
    id:string
}
