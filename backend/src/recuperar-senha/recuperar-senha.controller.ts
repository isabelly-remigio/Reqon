import { Controller, Post, Body } from '@nestjs/common';
import { RecuperarSenhaService } from './recuperar-senha.service';

@Controller('recuperar-senha')
export class RecuperarSenhaController {
  constructor(private readonly recuperarSenhaService: RecuperarSenhaService) {}

  @Post()
  async solicitarRecuperacao(@Body('email') email: string) {
    return this.recuperarSenhaService.solicitarRecuperacao(email);
  }

  @Post('redefinir')
  async redefinirSenha(@Body() body: { token: string; novaSenha: string }) {
    return this.recuperarSenhaService.redefinirSenha(body.token, body.novaSenha);
  }
}
