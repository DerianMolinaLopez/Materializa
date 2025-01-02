import { v4 as uuidv4 } from 'uuid';
import { Categoria } from "@prisma/client";

const categorias: Categoria[] = [
  {
    idCategoria: uuidv4(),
    NombreCategorias: "maderas",
    descripcion: "Tablones, pisos, puertas, marcos de puerta, escaleras."
  },
  {
    idCategoria: uuidv4(),
    NombreCategorias: "baños",
    descripcion: "escusados, lavabos, regaderas, tinas, llaves, accesorios de baño."
  },
  {
    idCategoria: uuidv4(),
    NombreCategorias: "herramientas",
    descripcion: "cierras, taladros, martillos, desarmadores, llaves, pinzas, herramientas de medición."
  },
  {
    idCategoria: uuidv4(),
    NombreCategorias: "construccion",
    descripcion: "semento, varilla, alambre, clavos, alambre, malla, impermeabilizantes, pinturas, yeso, cal."
  },
  {
    idCategoria: uuidv4(),
    NombreCategorias: "electricidad",
    descripcion: "cables, enchufes, interruptores, lámparas, focos, tubos, canaletas."
  }
];

export default categorias;