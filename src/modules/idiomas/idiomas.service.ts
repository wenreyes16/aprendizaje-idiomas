import { Injectable } from '@nestjs/common';
import { CreateIdiomaDto } from './dto/create-idioma.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Idioma } from './entities/idioma.entity';

@Injectable()
export class IdiomasService {
  constructor(
    @InjectRepository(Idioma)
    private idiomaRepository: Repository<Idioma>,
  ){}
 async create(createIdiomaDto: CreateIdiomaDto): Promise<Idioma> {
    try{
      const {cursoId, usuarioId, ...dataIdioma} = createIdiomaDto;
      const newIdioma = this.idiomaRepository.create({
        ...dataIdioma,
        usuario: {id: usuarioId},
        curso: {id: cursoId},
      });
      await this.idiomaRepository.save(newIdioma);
      return newIdioma;
    }catch(error){
      throw new Error(`Error en IdiomasService.create ${error}`);
    }
 }

  async findAll() {
    try{
      const data = await this.idiomaRepository.find(
        {relations: ['curso', 'usuario']}
      );
      return data;
    }catch(error){
      throw new Error(`Error en IdiomasService.findAll ${error}`);
    }
  }

  async findOne(id: number) {
    try{
      const data = await this.idiomaRepository.findOne({
        where: {id},
        relations: ['curso', 'usuario'],
      });
      return data;
    }catch(error){
      throw new Error(`Error en IdiomasService.findOne ${error}`);
    }
  }

  async update(id: number, updateIdiomaDto: CreateIdiomaDto) {
    try{
      const {cursoId, usuarioId, ...dataIdioma} = updateIdiomaDto;
      const idioma = await this.idiomaRepository.findOne({where:{id}});
      this.idiomaRepository.merge(idioma, {
        ...dataIdioma,
        usuario: {id: usuarioId},
        curso: {id: cursoId},
      });
      await this.idiomaRepository.save(idioma);
      return idioma;
    }catch(error){
      throw new Error(`Error en IdiomasService.update ${error}`);
    }
  }

  async remove(id: number) {
    try{
      const data = await this.idiomaRepository.delete({id});
      return data;
    }catch(error){
      throw new Error(`Error en IdiomasService.remove ${error}`);
    }
  }
}
