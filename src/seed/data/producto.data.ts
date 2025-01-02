/*
model Producto {
  id                String   @id @default(uuid())
  NombreProducto    String   @unique  
  Descripcion       String
  PrecioProducto    Float
  CategoriaID       String
  existencias       Int
  limiteExistencia  Int
  categoria         Categoria @relation(fields: [CategoriaID], references: [idCategoria])
  ordenesDetalle    OrdenesDetalle[]
}
*/

import { Producto } from "@prisma/client";
import categorias from "./categoria.data";

const productos: Producto[] = [
  {
    id: "1",
    NombreProducto: "Producto 1",
    Descripcion: "Descripcion del producto 1",
    PrecioProducto: 100,
    CategoriaID: categorias[0].idCategoria,
    existencias: 10,
    limiteExistencia: 10
  },
  {
    id: "2",
    NombreProducto: "Producto 2",
    Descripcion: "Descripcion del producto 2",
    PrecioProducto: 200,
    CategoriaID: categorias[1].idCategoria,
    existencias: 10,
    limiteExistencia: 10
  },
  {
    id: "3",
    NombreProducto: "Producto 3",
    Descripcion: "Descripcion del producto 3",
    PrecioProducto: 300,
    CategoriaID: categorias[2].idCategoria,
    existencias: 10,
    limiteExistencia: 10
  },
  {
    id: "4",
    NombreProducto: "Producto 4",
    Descripcion: "Descripcion del producto 4",
    PrecioProducto: 400,
    CategoriaID: categorias[3].idCategoria,
    existencias: 10,
    limiteExistencia: 10
  },
  {
    id: "5",
    NombreProducto: "Producto 5",
    Descripcion: "Descripcion del producto 5",
    PrecioProducto: 500,
    CategoriaID: categorias[2].idCategoria,
    existencias: 10,
    limiteExistencia: 10
  }
];

export default productos;