import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Curso } from "src/modules/curso/entities/curso.entity";
import { User } from "src/modules/auth/entities/user.entity";

@Entity()
export class Idioma {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({ type: 'varchar', length: 50 })
    nombre: string;

    @Column({ type: 'varchar', length: 50 })
    descripcion: string;    

    //relacion con curso usando el decorardor ManyToOne
    @ManyToOne(() => Curso, (curso) => curso.idiomas)
    curso: Curso;

    //relacion con usuario usando el decorardor ManyToOne
    @ManyToOne(() => User, (user) => user.idiomas)
    usuario: User;
}
