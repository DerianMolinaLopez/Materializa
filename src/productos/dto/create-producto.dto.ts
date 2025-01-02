import { IsNumber, IsString, MinLength,Min } from "class-validator";


export class CreateProductoDto {
    @IsString()
    @MinLength(5)
    NombreProducto: string;
    @IsString()
    @MinLength(5)
    Descripcion: string;
    @IsNumber()
    @Min(1)
    PrecioProducto: number;
    @IsString()
    @MinLength(5)
    CategoriaID: string;
    @Min(1)
    @IsNumber()
    existencias: number;
    @Min(1)
    @IsNumber()
    limiteExistencia: number;
    @IsNumber()
    price:number;


}
