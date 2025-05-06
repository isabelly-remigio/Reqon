import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servidor } from './servidor.entity';


@Injectable()
export class ServidorService {
  constructor(
    @InjectRepository(Servidor)
    private readonly servidorRepository: Repository<Servidor>,
  ) {}

  async cadastrar(servidor: Servidor): Promise<Servidor> {
    const existe = await this.servidorRepository.findOne({ where: { matricula: servidor.matricula } });
    if (existe) {
      throw new Error('Matrícula já cadastrada');
    }
    return this.servidorRepository.save(servidor);
  }

  async login(matricula: string, senha: string): Promise<string> {
    const servidor = await this.servidorRepository.findOne({ where: { matricula, senha } });
    if (!servidor) {
      throw new Error('Matrícula ou senha incorreta');
    }
    return 'Login bem-sucedido';
  }
  
  async findById(id: number): Promise<Servidor | null> {
    return this.servidorRepository.findOne({ where: { id } });
  }
  

}
