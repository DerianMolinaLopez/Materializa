/*
model Categoria {
  idCategoria       String     @id @default(uuid())
  NombreCategorias  String     @unique
  descripcion       String
  productos         Producto[]
} 
*/
import {v4 as uiuid} from 'uuid'
import { Categoria } from "@prisma/client";

 const categorias:Categoria[] = [
    {
        NombreCategorias:"Lacteos",
        descripcion:"Productos lacteos",
        idCategoria:uiuid()
    },
    {
        NombreCategorias:"Carnes",
        descripcion:"Productos carnicos",
        idCategoria:uiuid()
    },
    {
        NombreCategorias:"Abarrotes",
        descripcion:"Productos de la canasta basica",
        idCategoria:uiuid()
    },
    {
        NombreCategorias:"Frutas y verduras",
        descripcion:"Productos frescos",
        idCategoria:uiuid()
    }
]
export default categorias