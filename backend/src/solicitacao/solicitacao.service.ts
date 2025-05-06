import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Solicitacao } from './solicitacao.entity';
@Injectable()
export class SolicitacaoService {
  constructor(
    @InjectRepository(Solicitacao)
    private solicitacaoRepository: Repository<Solicitacao>,
  ) {}

  async buscarSolicitacoesPorAluno(alunoId: number): Promise<Solicitacao[]> {
    return this.solicitacaoRepository.find({
      where: { alunoId },
      relations: ['requerimento'], 
      order: { createdAt: 'DESC' },
    });
  }
}
