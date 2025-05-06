import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Requerimento } from './requerimento.entity';
import { Aluno } from 'src/aluno/aluno.entity';

@Injectable()
export class RequerimentoService {
  constructor(
    @InjectRepository(Requerimento)
    private readonly requerimentoRepository: Repository<Requerimento>,
  ) {}

  async criarRequerimento(
    alunoId: number,
    titulo: string,
    observacoes: string,
    arquivo: Express.Multer.File,
  ) {
    if (!arquivo) {
      throw new Error('Arquivo não foi enviado.');
    }

    const novoRequerimento = this.requerimentoRepository.create({
      alunoId,
      titulo,
      observacoes,
      anexo: arquivo.filename, 
      status: 'analisando', 
      createdAt: new Date(), 
    });

    return await this.requerimentoRepository.save(novoRequerimento);
  }

 
  async listarRequerimentos(alunoId: number) {
    console.log('Buscando requerimentos para alunoId:', alunoId); 
    return await this.requerimentoRepository.find({
      where: { alunoId },
      order: { createdAt: 'DESC' },
    });
  }
  
  async findAll(){
    return await this.requerimentoRepository.find({
      relations:['aluno']
    })
  }

  async buscarRequerimentoPorId(id: number) {
    return await this.requerimentoRepository.findOne({
      where: { id },
      relations: ['aluno'],  
    });
  }
  
  async atualizarStatus(id: number, status: string) {
    const requerimento = await this.requerimentoRepository.findOne({ where: { id } });
  
    if (!requerimento) {
      throw new Error('Requerimento não encontrado');
    }
  
    requerimento.status = status;
    return this.requerimentoRepository.save(requerimento);
  }
  
 
  

 
}
