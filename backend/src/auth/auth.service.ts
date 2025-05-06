import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Aluno } from '../aluno/aluno.entity';
import { Servidor } from '../servidor/servidor.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Aluno)
    private alunoRepository: Repository<Aluno>,
    @InjectRepository(Servidor)
    private servidorRepository: Repository<Servidor>,
    private jwtService: JwtService,
  ) {}

  async validateUser(matricula: string, senha: string, tipo: string): Promise<any> {
    console.log(`➡️ Tentando autenticar: ${tipo}`);
    console.log(`📌 Matrícula recebida: ${matricula}`);
    console.log(`📌 Senha recebida: ${senha}`);
  
    if (tipo === "Aluno") {
      const aluno = await this.alunoRepository.findOne({ where: { matricula } });
      console.log("🎓 Aluno encontrado:", aluno);
  
      if (aluno && aluno.senha === senha) {
        console.log("✅ Aluno autenticado!");
        return { nome: aluno.nomeCompleto, id: aluno.id, tipo: "Aluno" };
      }
    } else if (tipo === "Servidor") {
      const servidor = await this.servidorRepository.findOne({ where: { matricula } });
      console.log("🧑‍💼 Servidor encontrado:", servidor);
  
      if (servidor && servidor.senha === senha) {
        console.log("✅ Servidor autenticado!");
        return { nome: servidor.nomeCompleto, id: servidor.id, tipo: "Servidor" };
      }
    }
  
    console.log("❌ Nenhum usuário encontrado ou senha incorreta.");
    return null;
  }
  
  
  
  
  
  
  async login(user: any) {
    const payload = { matricula: user.matricula, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
      alunoId: user.id, // Retorna o alunoId
    };
  }
}