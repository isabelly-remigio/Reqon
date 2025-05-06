import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn} from 'typeorm';
import { IsNotEmpty, IsString, IsDateString, Length, IsPhoneNumber } from 'class-validator';
import { Requerimento } from 'src/requerimento/requerimento.entity';
import { Usuario } from 'src/usuario/usuario.entity';
@Entity()
export class Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  nomeCompleto: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  matricula: string;

  @Column()
  @IsNotEmpty()
  @IsDateString()
  dataNascimento: string;

  @Column()
  @IsNotEmpty()
  @Length(11, 11)
  cpf: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  rg: string;

  @Column()
  @IsNotEmpty()
  @IsPhoneNumber()
  telefone: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  senha: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  curso: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  periodo: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  turno: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  orgaoExpedidor: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  email: string;

  @OneToOne(() => Usuario, (usuario) => usuario.aluno)
  @JoinColumn()
  usuario: Usuario;


  @OneToMany(()=>Requerimento, requerimento => requerimento.aluno)
  listaRequerimentos: Requerimento[]
}
