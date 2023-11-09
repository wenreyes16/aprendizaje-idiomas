import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateCursoDto {
    @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsNumber()
  @IsNotEmpty()
  usuarioId: number;

  @IsArray({ each: true })
  @IsString()
  @IsOptional()
  lecciones?: {id:number, titulo: string; contenido: string; }[];
  
  @IsArray({ each: true })
  @IsString()
  @IsOptional()
  idiomas?: {
    nombre: string;
    descripcion: string;
  }[];
}
