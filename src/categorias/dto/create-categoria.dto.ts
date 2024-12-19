import { IsString, MinLength } from "class-validator"

export class CreateCategoriaDto {

    @IsString({message:'El nombre de la categoria debe ser un string'})
    @MinLength(1)
    NombreCategorias:string
    @IsString({message:'La descripcion de la categoria debe ser un string'})
    descripcion:string
}
