import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aluno } from './aluno.entity';

@Injectable()
export class AlunoService {
  constructor(
    @InjectRepository(Aluno)
    private readonly alunoRepository: Repository<Aluno>,
  ) {}

  async cadastrar(aluno: Aluno): Promise<Aluno> {
    const existe = await this.alunoRepository.findOne({ where: { matricula: aluno.matricula } });
    if (existe) {
      throw new Error('Matrícula já cadastrada');
    }
    return this.alunoRepository.save(aluno);
  }

  async login(matricula: string, senha: string): Promise<string> {
    const aluno = await this.alunoRepository.findOne({ where: { matricula, senha } });
    if (!aluno) {
      throw new Error('Matrícula ou senha incorreta');
    }
    return 'Login bem-sucedido';
  }

  async findByMatricula(matricula: string): Promise<Aluno | null> {
    return this.alunoRepository.findOne({ where: { matricula } });
  }

  async findById(id: number): Promise<Aluno | null> {
    return this.alunoRepository.findOne({ where: { id } });
  }
}
