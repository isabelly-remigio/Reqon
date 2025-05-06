import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
async login(@Body() body) {
  const { matricula, senha, tipo } = body;

  if (!matricula || !senha || !tipo) {
    return { success: false, message: "Matrícula, senha e tipo são obrigatórios!" };
  }

  const user = await this.authService.validateUser(matricula, senha, tipo);

  if (!user) {
    return { success: false, message: "Matrícula ou senha incorretos." };
  }

  return this.authService.login(user);
}

}
