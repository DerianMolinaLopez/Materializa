import { Producto } from "@prisma/client";
import categorias from "./categoria.data";
import { v4 as uuidv4 } from 'uuid';

const productos: Producto[] = [
  {
    id: uuidv4(),
    NombreProducto: "Tablón de madera",
    Descripcion: "Tablón de madera de alta calidad",
    PrecioProducto: 150,
    CategoriaID: categorias[0].idCategoria,
    existencias: 50,
    limiteExistencia: 100,
    price: 150
  },
  {
    id: uuidv4(),
    NombreProducto: "Puerta de madera",
    Descripcion: "Puerta de madera sólida",
    PrecioProducto: 300,
    CategoriaID: categorias[0].idCategoria,
    existencias: 20,
    limiteExistencia: 50,
    price: 300
  },
  {
    id: uuidv4(),
    NombreProducto: "Escalera de madera",
    Descripcion: "Escalera de madera resistente",
    PrecioProducto: 200,
    CategoriaID: categorias[0].idCategoria,
    existencias: 15,
    limiteExistencia: 30,
    price: 200
  },
  {
    id: uuidv4(),
    NombreProducto: "Lavabo de cerámica",
    Descripcion: "Lavabo de cerámica blanca",
    PrecioProducto: 100,
    CategoriaID: categorias[1].idCategoria,
    existencias: 40,
    limiteExistencia: 80,
    price: 100
  },
  {
    id: uuidv4(),
    NombreProducto: "Regadera de acero inoxidable",
    Descripcion: "Regadera de alta presión",
    PrecioProducto: 80,
    CategoriaID: categorias[1].idCategoria,
    existencias: 25,
    limiteExistencia: 50,
    price: 80
  },
  {
    id: uuidv4(),
    NombreProducto: "Taladro eléctrico",
    Descripcion: "Taladro eléctrico de 500W",
    PrecioProducto: 120,
    CategoriaID: categorias[2].idCategoria,
    existencias: 30,
    limiteExistencia: 60,
    price: 120
  },
  {
    id: uuidv4(),
    NombreProducto: "Martillo de acero",
    Descripcion: "Martillo de acero con mango de goma",
    PrecioProducto: 25,
    CategoriaID: categorias[2].idCategoria,
    existencias: 100,
    limiteExistencia: 200,
    price: 25
  },
  {
    id: uuidv4(),
    NombreProducto: "Semento Portland",
    Descripcion: "Semento Portland de alta resistencia",
    PrecioProducto: 50,
    CategoriaID: categorias[3].idCategoria,
    existencias: 200,
    limiteExistencia: 400,
    price: 50
  },
  {
    id: uuidv4(),
    NombreProducto: "Varilla de acero",
    Descripcion: "Varilla de acero de 1 pulgada",
    PrecioProducto: 10,
    CategoriaID: categorias[3].idCategoria,
    existencias: 500,
    limiteExistencia: 1000,
    price: 10
  },
  {
    id: uuidv4(),
    NombreProducto: "Impermeabilizante",
    Descripcion: "Impermeabilizante para techos",
    PrecioProducto: 70,
    CategoriaID: categorias[3].idCategoria,
    existencias: 60,
    limiteExistencia: 120,
    price: 70
  }
];

export default productos;