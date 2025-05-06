import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { Aluno } from './aluno.entity';

@Controller('aluno')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Post('cadastro')
  async cadastrar(@Body() aluno: Aluno): Promise<Aluno> {
    return this.alunoService.cadastrar(aluno);
  }

  @Post('login')
  async login(@Body() body: { matricula: string; senha: string }) {
    return this.alunoService.login(body.matricula, body.senha);
  }

  @Get(':matricula')
  async getAlunoByMatricula(@Param('matricula') matricula: string) {
    return this.alunoService.findByMatricula(matricula);
  }

  @Get('id/:id')
  async getAlunoById(@Param('id') id: number) {
    return this.alunoService.findById(id);
  }
}
