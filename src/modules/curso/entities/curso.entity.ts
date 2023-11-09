import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/modules/auth/entities/user.entity";
import { Leccion } from "src/modules/leccion/entities/leccion.entity";
import { Comentario } from "src/modules/comentarios/entities/comentario.entity";
import { Idioma } from "src/modules/idiomas/entities/idioma.entity";
import { Evaluacion } from "src/modules/evaluacion/entities/evaluacion.entity";

@Entity()
export class Curso {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    //relacion con usuario
    @ManyToOne(() => User, (user) => user.cursos)
    usuario: User;

    //relacion con leccion
    @OneToMany(() => Leccion, (leccion) => leccion.curso)
    lecciones: Leccion[];

    //relacion con comentario
    @OneToMany(() => Comentario, (comentario) => comentario.curso)
    comentarios: Comentario[];

    //relacion con idioma
    @OneToMany(() => Idioma, (idioma) => idioma.curso)
    idiomas: Idioma[];

    @OneToMany(() => Evaluacion, (evaluacion)=>evaluacion.curso)
    evaluaciones: Evaluacion[];

}
