import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Usuario } from 'src/usuario/usuario.entity';
@Entity()
export class Servidor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomeCompleto: string;

  @Column()
  matricula: string;

  @Column()
  senha: string;
  
  @Column()
  email: string;

  @OneToOne(() => Usuario, (usuario) => usuario.servidor)
  @JoinColumn()
  usuario: Usuario;

 
}
