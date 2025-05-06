import { Aluno } from 'src/aluno/aluno.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('requerimentos')
export class Requerimento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  alunoId: number;

  @Column()
  titulo: string;

  @Column('text')
  observacoes: string;

  @Column()
  anexo: string; 

  @Column({ default: 'analisando' })
  status: string;

  @CreateDateColumn()
  createdAt: Date; 

  @ManyToOne(()=>Aluno, aluno => aluno.listaRequerimentos)
  @JoinColumn()
  aluno: Aluno

}
  

  
  

