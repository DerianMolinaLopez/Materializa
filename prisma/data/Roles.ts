import { Rol } from "@prisma/client";
import {v4 as uid} from "uuid"
export const roles : Rol[] = [
    {
        id: uid(),
        name: "ADMINISTRADOR",
    },
    {
        id: uid(),
        name: "EMPLEADO",
    }
]