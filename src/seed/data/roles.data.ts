import { Rol } from "@prisma/client";
import {v4 as uiuid} from 'uuid'
export const roles:Rol[] = [
    {
        name:"encargado de cajas",
        id:uiuid()
    },
    {
      name:"cajero",
      id:uiuid()   
    }
]