import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsersImages } from './usersImages.entity';
import { Curso } from 'src/modules/curso/entities/curso.entity';
import { Comentario } from 'src/modules/comentarios/entities/comentario.entity';
import { Idioma } from 'src/modules/idiomas/entities/idioma.entity';
import { Evaluacion } from 'src/modules/evaluacion/entities/evaluacion.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'text', array: true, default: ['user'] })
  roles: string[];

  @OneToMany(() => UsersImages, (userImage) => userImage.user, {
    cascade: true,
  })
  images?: UsersImages[];

  @OneToMany(() => Curso, (curso) => curso.usuario)
  cursos: Curso[];

  //relacion con comentario 
  @OneToMany(()=>Comentario, (comentario)=>comentario.usuario)
  comentarios: Comentario[];

  //relacion con idioma
  @OneToMany(()=>Idioma, (idioma)=>idioma.usuario)
  idiomas: Idioma[];

  //relacion con evaluacion
  @OneToMany(()=>Evaluacion, (evaluacion)=>evaluacion.usuario)
  evaluaciones: Evaluacion[];
}
