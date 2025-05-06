import {
  Controller,
  Post,
  Get,
  Body,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
  Param,
  ParseIntPipe, Put
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RequerimentoService } from './requerimento.service';
import { Requerimento } from './requerimento.entity'; 

@Controller('requerimento')
export class RequerimentoController {
  constructor(private readonly requerimentoService: RequerimentoService) {}

  @Post('enviar')
  @UseInterceptors(FileInterceptor('anexo'))
  async enviarRequerimento(
    @Body() body: any,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException('Nenhum arquivo foi enviado.');
    }

    const { alunoId, titulo, observacoes } = body;

    if (!alunoId || !titulo || !observacoes) {
      throw new BadRequestException('Dados incompletos no corpo da requisição.');
    }

    return await this.requerimentoService.criarRequerimento(
      parseInt(alunoId),
      titulo,
      observacoes,
      file,
    );
  }
  @Get('aluno/:alunoId')  
  async listarRequerimentosPorAluno(
    @Param('alunoId', ParseIntPipe) alunoId: number,
  ): Promise<Requerimento[]> {
    return this.requerimentoService.listarRequerimentos(alunoId);
  }
  @Get()
  async findAll(){
    return await this.requerimentoService.findAll()
  }
  
  @Get('detalhes/:id')  
  async buscarRequerimentoPorId(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Requerimento> {
    return this.requerimentoService.buscarRequerimentoPorId(id);
  }
  
  @Put(':id/status')
async atualizarStatus(
  @Param('id') id: string,
  @Body() body: { status: string },
) {
  return this.requerimentoService.atualizarStatus(+id, body.status);
}


}

