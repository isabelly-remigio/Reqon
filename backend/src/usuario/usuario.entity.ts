import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Aluno } from '../aluno/aluno.entity';
import { Servidor } from '../servidor/servidor.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: true })
  matricula: string; // Para alunos

  @Column({ unique: true, nullable: true })
  cip: string; // Para servidores

  @Column()
  senha: string;

  @Column({ type: 'enum', enum: ['aluno', 'servidor'] })
  tipo: string;

  @OneToOne(() => Aluno, (aluno) => aluno.usuario, { cascade: true })
  @JoinColumn()
  aluno: Aluno;

  @OneToOne(() => Servidor, (servidor) => servidor.usuario, { cascade: true })
  @JoinColumn()
  servidor: Servidor;
}