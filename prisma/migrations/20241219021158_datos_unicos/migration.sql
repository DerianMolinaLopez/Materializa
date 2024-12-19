/*
  Warnings:

  - A unique constraint covering the columns `[NombreCategorias]` on the table `Categoria` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[NombreProducto]` on the table `Producto` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Categoria_NombreCategorias_key` ON `Categoria`(`NombreCategorias`);

-- CreateIndex
CREATE UNIQUE INDEX `Producto_NombreProducto_key` ON `Producto`(`NombreProducto`);
