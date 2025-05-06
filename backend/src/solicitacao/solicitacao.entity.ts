import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, OneToOne, OneToMany } from 'typeorm';
import { Requerimento } from '../requerimento/requerimento.entity';

@Entity('solicitacoes')
export class Solicitacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  alunoId: number;

  @Column('text')
  observacoes: string;

  @Column({ default: 'analisando' })
  status: string;

  @CreateDateColumn()
  createdAt: Date;


}
