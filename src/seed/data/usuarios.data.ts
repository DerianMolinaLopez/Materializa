import { Usuario } from "@prisma/client";
import { roles } from "./roles.data";

const usuarios: Usuario[] = [
  {
    id: "1",
    Nombre: "Usuario1",
    Apellidos: "Apellidos1",
    email: "usuario1@pruebas.com",
    password: "password123",
    role: roles[0].id,
  },
  {
    id: "2",
    Nombre: "Usuario2",
    Apellidos: "Apellidos2",
    email: "usuario2@pruebas.com",
    password: "password123",
    role: roles[1].id,
  },
  {
    id: "3",
    Nombre: "Usuario3",
    Apellidos: "Apellidos3",
    email: "usuario3@pruebas.com",
    password: "password123",
    role: roles[1].id,
  },
  {
    id: "4",
    Nombre: "Usuario4",
    Apellidos: "Apellidos4",
    email: "usuario4@pruebas.com",
    password: "password123",
    role: roles[0].id,
  },
  {
    id: "5",
    Nombre: "Usuario5",
    Apellidos: "Apellidos5",
    email: "usuario5@pruebas.com",
    password: "password123",
    role: roles[1].id,
  }
];

export default usuarios;