import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitacaoService } from './solicitacao.service';
import { SolicitacaoController } from './solicitacao.controller';
import { Solicitacao } from './solicitacao.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Solicitacao])], 
  providers: [SolicitacaoService],
  controllers: [SolicitacaoController]
})
export class SolicitacaoModule {}
