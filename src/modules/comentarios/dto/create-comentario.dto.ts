import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateComentarioDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    comentario: string;

    @IsNumber()
    @IsNotEmpty()
    usuarioId: number; // ID del usuario que realiza el comentario
  
    @IsNumber()
    @IsNotEmpty()
    cursoId: number; // ID del curso al que se asocia el comentario
}
