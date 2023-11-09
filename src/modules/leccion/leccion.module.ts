import { Module } from '@nestjs/common';
import { LeccionService } from './leccion.service';
import { LeccionController } from './leccion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Leccion } from './entities/leccion.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Leccion])],
  controllers: [LeccionController],
  providers: [LeccionService],
})
export class LeccionModule {}
