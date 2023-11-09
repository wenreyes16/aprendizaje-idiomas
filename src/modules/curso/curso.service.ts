import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Leccion } from '../leccion/entities/leccion.entity';
import { Curso } from './entities/curso.entity';
import { Idioma } from '../idiomas/entities/idioma.entity';

@Injectable()
export class CursoService {
  constructor(
    @InjectRepository(Curso)
    private readonly cursoService:Repository<Curso>,

    @InjectRepository(Leccion)
    private readonly leccionService:Repository<Leccion>,

    @InjectRepository(Idioma)
    private readonly idiomaService:Repository<Idioma>,
  ) {}

  async create(createCursoDto: CreateCursoDto): Promise<Curso> {
    try{
      const {lecciones=[],idiomas=[], usuarioId, ...dataCurso} = createCursoDto;
      //validar que el usuario exista
      const usuario = await this.cursoService.findOne({where:{id:usuarioId}});
      if(!usuario){
        
      }
      //validar que el idioma exista
      const newCurso = this.cursoService.create({
        ...dataCurso,
        usuario: {id: usuarioId}, 
        idiomas: idiomas.map((idioma) => this.idiomaService.create({
          ...idioma,
        })),
        lecciones: lecciones.map((leccion) => this.leccionService.create({
          ...leccion,
        })),
      });
      await this.cursoService.save(newCurso);
      return newCurso;
    }catch(error){
      throw new Error(`Error en CursoService.create ${error}`);
    }
  }

  async findAll() {
    try{
      const data = await this.cursoService.find(
        {relations: ['usuario', 'lecciones', 'idiomas', 'comentarios', 'evaluaciones']}
      );
      return data;
    }catch(error){
      throw new Error(`Error en CursoService.findAll ${error}`);
    }
  }

  async findOne(id: number) {
    try{
      const data = await this.cursoService.findOne({
        where: {id},
        relations: ['usuario', 'lecciones', 'idiomas', 'comentarios', 'evaluaciones'],
      });
      return data;
    }catch(error){
      throw new Error(`Error en CursoService.findOne ${error}`);
    }
  }

  async update(id: number, updateCursoDto: CreateCursoDto) {
    try{
      const {lecciones=[],idiomas=[], usuarioId, ...dataCurso} = updateCursoDto;
      const curso = await this.cursoService.findOne({where:{id}});
      this.cursoService.merge(curso, {
        ...dataCurso,
        usuario: {id: usuarioId},
        
        idiomas: idiomas.map((idioma) => this.idiomaService.create({
          ...idioma,
        })),
        lecciones: lecciones.map((leccion) => this.leccionService.create({
          ...leccion,
        })),
      });
      return await this.cursoService.save(curso);
    }catch(error){
      throw new Error(`Error en CursoService.update ${error}`);
    }
  }

  async remove(id: number) {
    try{
      const curso = await this.cursoService.findOne({where:{id}});
      await this.cursoService.remove(curso);
    }catch(error){
      throw new Error(`Error en CursoService.remove ${error}`);
    }
  }
}
