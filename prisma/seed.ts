
import { roles } from "./data/Roles";
import { PrismaClient } from "@prisma/client";
function Main():Promise<void>{
    return new Promise(async (resolve,reject)=>{
        const prisma = new PrismaClient() 
        for (const rol of roles) {
            await prisma.rol.create({
                data:rol
            })
        }
        resolve()
    })
}
Main()