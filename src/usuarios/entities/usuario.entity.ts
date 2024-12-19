/**
 * model Usuario {
  id        String   @id @default(uuid())
  Nombre    String
  Apellidos String
  email     String   @unique
  password  String
  role      String
  Rol      Rol      @relation(fields: [role], references: [id])
  ordenes   Orden[]
}
 */
export class Usuario {}
