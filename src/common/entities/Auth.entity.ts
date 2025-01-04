import { Request } from "express";


type User = {
    user?: {
        id: string;
        email: string;
    };
}
 type AuthResponse= User & Request
 export default AuthResponse//modificacion de request para agregar al usuario