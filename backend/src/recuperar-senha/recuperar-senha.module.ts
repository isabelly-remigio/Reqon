import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecuperarSenhaController } from './recuperar-senha.controller';
import { RecuperarSenhaService } from './recuperar-senha.service';
import { Aluno } from '../aluno/aluno.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Aluno])],
  controllers: [RecuperarSenhaController],
  providers: [RecuperarSenhaService],
})
export class RecuperarSenhaModule {}
