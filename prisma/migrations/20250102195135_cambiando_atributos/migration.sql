-- CreateTable
CREATE TABLE "Producto" (
    "id" TEXT NOT NULL,
    "NombreProducto" TEXT NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "PrecioProducto" DOUBLE PRECISION NOT NULL,
    "CategoriaID" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "existencias" INTEGER NOT NULL,
    "limiteExistencia" INTEGER NOT NULL,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "idCategoria" TEXT NOT NULL,
    "NombreCategorias" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("idCategoria")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Apellidos" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rol" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Rol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orden" (
    "id" TEXT NOT NULL,
    "Usuario" TEXT NOT NULL,

    CONSTRAINT "Orden_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrdenesDetalle" (
    "id" TEXT NOT NULL,
    "orden_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "SubTotal" INTEGER NOT NULL,

    CONSTRAINT "OrdenesDetalle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Producto_NombreProducto_key" ON "Producto"("NombreProducto");

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_NombreCategorias_key" ON "Categoria"("NombreCategorias");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Producto" ADD CONSTRAINT "Producto_CategoriaID_fkey" FOREIGN KEY ("CategoriaID") REFERENCES "Categoria"("idCategoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_role_fkey" FOREIGN KEY ("role") REFERENCES "Rol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orden" ADD CONSTRAINT "Orden_Usuario_fkey" FOREIGN KEY ("Usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdenesDetalle" ADD CONSTRAINT "OrdenesDetalle_orden_id_fkey" FOREIGN KEY ("orden_id") REFERENCES "Orden"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrdenesDetalle" ADD CONSTRAINT "OrdenesDetalle_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
