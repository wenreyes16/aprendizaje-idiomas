import { Injectable } from '@nestjs/common';
import { CreateEvaluacionDto } from './dto/create-evaluacion.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Evaluacion } from './entities/evaluacion.entity';
import { Repository } from 'typeorm';
@Injectable()
export class EvaluacionService {
  constructor(
    @InjectRepository(Evaluacion)
    private readonly evaluacionRepository: Repository<Evaluacion>,
  ) {}
  async create(createEvaluacionDto: CreateEvaluacionDto) {
    try {
     const {usuarioId, cursoId, ...dataEvaluacion} = createEvaluacionDto;
      const newLeccion =  this.evaluacionRepository.create({
        ...dataEvaluacion,
        usuario: {id: usuarioId},
        curso: {id: cursoId},
      });
      await this.evaluacionRepository.save(newLeccion);
      return newLeccion;

    } catch (error) {
      throw new Error(`Error en el servidor ${error}`);
    }
  }

  async findAll() {
    try {
      const evaluaciones = await this.evaluacionRepository.find();
      return evaluaciones;
    } catch (error) {
      throw new Error(`Error en el servidor ${error}`);
    }
  }
  async findOne(id: number) {
    try {
      const evaluacion = await this.evaluacionRepository.findOne({where: {id}});
      return evaluacion;
    } catch (error) {
      throw new Error(`Error en el servidor ${error}`);
    }
  }


  async update(id: number, updateEvaluacionDto: CreateEvaluacionDto) {
    try {
      const evaluacion = await this.evaluacionRepository.findOne({where: {id}});
      this.evaluacionRepository.merge(evaluacion, updateEvaluacionDto);
      await this.evaluacionRepository.save(evaluacion);
      return evaluacion;
    } catch (error) {
      throw new Error(`Error en el servidor ${error}`);
    }
  }

  async remove(id: number) {
    try {
      const evaluacion = await this.evaluacionRepository.findOne({where: {id}});
      await this.evaluacionRepository.remove(evaluacion);
      return evaluacion;
    } catch (error) {
      throw new Error(`Error en el servidor ${error}`);
    }
  }
}
