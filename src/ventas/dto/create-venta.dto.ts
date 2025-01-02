import { Type } from "class-transformer";
import { IsArray, ValidateNested, IsUUID, IsString, IsNumber } from "class-validator";

export class CreateVentaDto {

  @IsString()
  usuario: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductoDtoExtended)//especificamos que esperamos un array de objetos de este tipo
  productos: ProductoDtoExtended[];
}

export class ProductoDtoExtended {
  @IsUUID()
  idProducto: string;
  @IsNumber()
  cantidad: number;

  @IsNumber()
  subtotal: number;
}