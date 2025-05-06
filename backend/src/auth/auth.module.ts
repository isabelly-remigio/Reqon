import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aluno } from '../aluno/aluno.entity';
import { Servidor } from '../servidor/servidor.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Aluno, Servidor]),
    JwtModule.register({
      secret: 'reqon',
      signOptions: { expiresIn: '1h' }, 
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}