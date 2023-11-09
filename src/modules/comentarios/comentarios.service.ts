import { Injectable } from '@nestjs/common';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Comentario } from './entities/comentario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ComentariosService {
  constructor(
    @InjectRepository(Comentario)
    private readonly comentariosService:Repository<Comentario>,
  ) {}

  async create(createComentarioDto: CreateComentarioDto): Promise<Comentario> {
    try{
      const {usuarioId, cursoId, ...dataComentario} = createComentarioDto;
      const newComentario = this.comentariosService.create({
        ...dataComentario,
        usuario: {id: usuarioId},
        curso: {id: cursoId},
      });
      await this.comentariosService.save(newComentario);
      return newComentario;
    }catch(error){
      throw new Error(`Error en ComentariosService.create ${error}`);
    }
  }

  async findAll() {
    try{
      const data = await this.comentariosService.find(
        {relations: ['usuario', 'curso']}
      );
      return data;
    }catch(error){
      throw new Error(`Error en ComentariosService.findAll ${error}`);
    }
  }

  async findOne(id: number) {
    try{
      const data = await this.comentariosService.findOne({
        where: {id},
        relations: ['usuario', 'curso'],
      });
      return data;
    }catch(error){
      throw new Error(`Error en ComentariosService.findOne ${error}`);
    }
  }


  async update(id: number, updateComentarioDto: CreateComentarioDto) {
    try{
      const {usuarioId, cursoId, ...dataComentario} = updateComentarioDto;
      const comentario = await this.comentariosService.findOne({where:{id}});
      this.comentariosService.merge(comentario, {
        ...dataComentario,
        usuario: {id: usuarioId},
        curso: {id: cursoId},
      });
      const updateComentario = await this.comentariosService.save(comentario);
      return updateComentario;
    }catch(error){
      throw new Error(`Error en ComentariosService.update ${error}`);
    }
  }

  async remove(id: number) {
    try{
      const comentario = await this.comentariosService.findOne({where:{id}});
      const deleteComentario = await this.comentariosService.remove(comentario);
      return deleteComentario;
    }catch(error){
      throw new Error(`Error en ComentariosService.remove ${error}`);
    }
  }
}
