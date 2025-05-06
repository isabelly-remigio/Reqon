import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
    ) {}

    async buscarUsuarioPorId(id: number) {
        const usuario = await this.usuarioRepository.findOne({ where: { id } });

        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }

        return usuario;
    }

    async atualizarUsuario(id: number, dadosAtualizados: any) {
        await this.usuarioRepository.update(id, dadosAtualizados);
        return { message: "Perfil atualizado com sucesso!" };
    }
}
