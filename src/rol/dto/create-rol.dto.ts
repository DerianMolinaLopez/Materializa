import { IsString, MinLength } from "class-validator";

export class CreateRolDto {
    /*
      id   String @id @default(uuid())
  name String
    */
   @IsString()
   @MinLength(3)
   name:string;
}
