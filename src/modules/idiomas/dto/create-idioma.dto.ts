import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';
export class CreateIdiomaDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @IsNumber()
    @IsOptional()
    cursoId: number;

    @IsNumber()
    @IsOptional()
    usuarioId: number;
}
