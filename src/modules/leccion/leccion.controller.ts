import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LeccionService } from './leccion.service';
import { CreateLeccionDto } from './dto/create-leccion.dto';

@Controller('leccion')
export class LeccionController {
  constructor(private readonly leccionService: LeccionService) {}

  @Post()
  create(@Body() createLeccionDto: CreateLeccionDto) {
    return this.leccionService.create(createLeccionDto);
  }

  @Get()
  findAll() {
    return this.leccionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leccionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLeccionDto: CreateLeccionDto) {
    return this.leccionService.update(+id, updateLeccionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leccionService.remove(+id);
  }
}
