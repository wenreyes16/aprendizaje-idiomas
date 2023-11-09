import { IsArray, IsBoolean, IsDate, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEvaluacionDto {
  @IsString()
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion: string;

  @IsArray()
  preguntas: number[]; // Supongamos que las preguntas se representan por sus IDs

  @IsString()
  nivelDificultad: string;

  @IsDate()
  @IsOptional()
  fechaCreacion: Date;

  @IsDate()
  @IsOptional()
  fechaVencimiento: Date;

  @IsInt()
  @IsOptional()
  tiempoLimite: number;

  @IsInt()
  puntuacionMaxima: number;

  @IsNumber()
  @IsOptional()
  calificacionObtenida: number;

  @IsBoolean()
  completada: boolean;

  @IsString()
  @IsOptional()
  feedback: string;

  @IsString()
  @IsOptional()
  notasAdicionales: string;

  @IsNumber()
  @IsOptional()
  cursoId: number;

  @IsNumber()
  @IsOptional()
  usuarioId: number;
}
