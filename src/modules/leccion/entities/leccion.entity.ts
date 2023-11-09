import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Curso } from '../../curso/entities/curso.entity';
@Entity()
export class Leccion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  contenido: string;

  @ManyToOne(() => Curso, (curso) => curso.lecciones)
  curso: Curso;
}
