import { Module } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoController } from './curso.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';
import { Leccion } from '../leccion/entities/leccion.entity';
import { Idioma } from '../idiomas/entities/idioma.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Curso, Leccion, Idioma])],
  controllers: [CursoController],
  providers: [CursoService],
})
export class CursoModule {}
