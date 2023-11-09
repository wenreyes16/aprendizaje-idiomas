import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/modules/auth/entities/user.entity";
import { Curso } from "src/modules/curso/entities/curso.entity";

@Entity()
export class Comentario {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({ type: 'varchar', length: 50 })
    comentario: string;

    //relacion con usuario usando el decorardor ManyToOne
    @ManyToOne(() => User, (user) => user.comentarios)
    usuario: User;

    //relacion con curso usando el decorardor ManyToOne
    @ManyToOne(() => Curso, (curso) => curso.comentarios)
    curso: Curso;
}
