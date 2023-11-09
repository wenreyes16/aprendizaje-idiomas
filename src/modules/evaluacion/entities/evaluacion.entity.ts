import { User } from "src/modules/auth/entities/user.entity";
import { Curso } from "src/modules/curso/entities/curso.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Evaluacion {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre: string;
  
    @Column({ type: 'text', nullable: true })
    descripcion: string;
  
    @Column({ default: 'principiante' })
    nivelDificultad: string;
  
    @Column({ type: 'timestamp', nullable: true })
    fechaCreacion: Date;
  
    @Column({ type: 'timestamp', nullable: true })
    fechaVencimiento: Date;
  
    @Column({ type: 'int', nullable: true })
    tiempoLimite: number;
  
    @Column({ type: 'int', default: 100 })
    puntuacionMaxima: number;
  
    @Column({ type: 'int', nullable: true })
    calificacionObtenida: number;
  
    @Column({ default: false })
    completada: boolean;
  
    @Column({ type: 'text', nullable: true })
    feedback: string;
  
    @Column({ type: 'text', nullable: true })
    notasAdicionales: string;

    //relacion con curso usando el decorardor ManyToOne
    @ManyToOne(() => Curso, (curso) => curso.evaluaciones)
    curso: Curso;

    //relacion con usuario usando el decorardor ManyToOne
    @ManyToOne(() => User, (user) => user.evaluaciones)
    usuario: User;
}
