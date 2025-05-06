import { Controller, Param, Get, Put, Body } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @Get(':id')
    async buscarUsuario(@Param('id') id: string) {
      console.log("ID recebido:", id); // Verifica o ID recebido
      const idNumero = Number(id); // Converte para número
    
      if (isNaN(idNumero)) {
        throw new Error('ID inválido'); // Evita erro no banco
      }
    
      return this.usuarioService.buscarUsuarioPorId(idNumero);
    }
    

    @Put(':id')
    async atualizarUsuario(@Param('id') id: string, @Body() dadosAtualizados) {
      console.log("ID recebido para atualização:", id);
      const idNumero = Number(id);
    
      if (isNaN(idNumero)) {
        throw new Error('ID inválido');
      }
    
      return this.usuarioService.atualizarUsuario(idNumero, dadosAtualizados);
    }
    
}
