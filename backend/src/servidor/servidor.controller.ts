import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import {Servidor} from './servidor.entity'
import { ServidorService } from './servidor.service';

@Controller('servidor')
export class ServidorController {
  constructor(private readonly servidorService: ServidorService) {}

  @Post('cadastro')
  async cadastrar(@Body() servidor: Servidor): Promise<Servidor> {
    return this.servidorService.cadastrar(servidor);
  }

  @Post('login')
  async login(@Body() body: { matricula: string; senha: string }) {
    return this.servidorService.login(body.matricula, body.senha);
  }
  @Get(':id')
  async getServidorById(@Param('id') id: number) {
    return this.servidorService.findById(id);
  }
  
}
