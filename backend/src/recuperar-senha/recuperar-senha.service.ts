import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aluno } from '../aluno/aluno.entity';
import * as crypto from 'crypto';

@Injectable()
export class RecuperarSenhaService {
  constructor(
    @InjectRepository(Aluno)
    private readonly alunoRepository: Repository<Aluno>,
  ) {}

  private tokens = new Map<string, string>(); 

  async solicitarRecuperacao(email: string) {
    const aluno = await this.alunoRepository.findOne({ where: { email } });

    if (!aluno) {
      return { message: 'Se este e-mail estiver cadastrado, você receberá um link.' };
    }

    const token = crypto.randomBytes(32).toString('hex'); 
    this.tokens.set(token, email);

    const link = `http://localhost:3001/redefinir-senha?token=${token}`;

    console.log(`Use este link para redefinir sua senha: ${link}`);

    return { message: 'Se este e-mail estiver cadastrado, você receberá um link.', link };
  }

  async redefinirSenha(token: string, novaSenha: string) {
    const email = this.tokens.get(token);
    if (!email) {
      return { error: 'Token inválido ou expirado' };
    }

    const aluno = await this.alunoRepository.findOne({ where: { email } });

    if (!aluno) {
      return { error: 'Usuário não encontrado' };
    }

    aluno.senha = novaSenha; 
    await this.alunoRepository.save(aluno);
    this.tokens.delete(token);

    return { message: 'Senha alterada com sucesso!' };
  }
}
