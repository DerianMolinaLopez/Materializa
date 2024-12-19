-- CreateTable
CREATE TABLE `Producto` (
    `id` VARCHAR(191) NOT NULL,
    `NombreProducto` VARCHAR(191) NOT NULL,
    `Descripcion` VARCHAR(191) NOT NULL,
    `PrecioProducto` DOUBLE NOT NULL,
    `CategoriaID` VARCHAR(191) NOT NULL,
    `existencias` INTEGER NOT NULL,
    `limiteExistencia` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categoria` (
    `idCategoria` VARCHAR(191) NOT NULL,
    `NombreCategorias` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idCategoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` VARCHAR(191) NOT NULL,
    `Nombre` VARCHAR(191) NOT NULL,
    `Apellidos` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Orden` (
    `id` VARCHAR(191) NOT NULL,
    `OrderId` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `SubTotal` INTEGER NOT NULL,
    `cliente` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrdenesDetalle` (
    `id` VARCHAR(191) NOT NULL,
    `orden_id` VARCHAR(191) NOT NULL,
    `product_id` VARCHAR(191) NOT NULL,
    `Cantidad` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Producto` ADD CONSTRAINT `Producto_CategoriaID_fkey` FOREIGN KEY (`CategoriaID`) REFERENCES `Categoria`(`idCategoria`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Orden` ADD CONSTRAINT `Orden_cliente_fkey` FOREIGN KEY (`cliente`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrdenesDetalle` ADD CONSTRAINT `OrdenesDetalle_orden_id_fkey` FOREIGN KEY (`orden_id`) REFERENCES `Orden`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrdenesDetalle` ADD CONSTRAINT `OrdenesDetalle_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Producto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
