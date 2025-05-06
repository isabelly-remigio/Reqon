import { Controller, Get, Param } from '@nestjs/common';
import { SolicitacaoService } from './solicitacao.service';

@Controller('solicitacoes')
export class SolicitacaoController {
  constructor(private readonly solicitacaoService: SolicitacaoService) {}

  @Get(':alunoId')
  async buscarSolicitacoesPorAluno(@Param('alunoId') alunoId: number) {
    const solicitacoes = await this.solicitacaoService.buscarSolicitacoesPorAluno(alunoId);
    return solicitacoes;
  }
}
