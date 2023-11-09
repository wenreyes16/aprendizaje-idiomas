import { Injectable } from '@nestjs/common';
import { CreateLeccionDto } from './dto/create-leccion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Leccion } from './entities/leccion.entity';
@Injectable()
export class LeccionService {
  constructor(
    @InjectRepository(Leccion)
    private leccionRepository: Repository<Leccion>,
  ) {}
  async create(createLeccionDto: CreateLeccionDto): Promise<Leccion> {
    try{
      const {cursoId, ...dataLeccion} = createLeccionDto;
      const newLeccion = this.leccionRepository.create({
        ...dataLeccion,
        curso: {id: cursoId},
      });
      await this.leccionRepository.save(newLeccion);
      return newLeccion;
    }
    catch(error){
      throw new Error(`Error en LeccionService.create ${error}`);
    }
  }

  async findAll() {
    try{
      const data = await this.leccionRepository.find(
        {relations: ['curso']}
      );
      return data;
    }catch(error){
      throw new Error(`Error en LeccionService.findAll ${error}`);
    }
  }

  async findOne(id: number) {
    try{
      const data = await this.leccionRepository.findOne({
        where: {id},
        relations: ['curso'],
      });
      return data;
    }catch(error){
      throw new Error(`Error en LeccionService.findOne ${error}`);
    }
  }

  async update(id: number, updateLeccionDto: CreateLeccionDto) {
    try{
      const {cursoId, ...dataLeccion} = updateLeccionDto;
      const leccion = await this.leccionRepository.findOne({where:{id}});
      this.leccionRepository.merge(leccion, {
        ...dataLeccion,
        curso: {id: cursoId},
      });
      await this.leccionRepository.save(leccion);
      return leccion;
    }catch(error){
      throw new Error(`Error en LeccionService.update ${error}`);
    }
  }

  async remove(id: number) {
    try{
      const leccion = await this.leccionRepository.findOne({where:{id}});
      await this.leccionRepository.remove(leccion);
      return leccion;
    }catch(error){
      throw new Error(`Error en LeccionService.remove ${error}`);
    }
  }
}
