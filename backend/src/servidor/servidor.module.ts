import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Servidor } from './servidor.entity';
import { ServidorController } from './servidor.controller';
import { ServidorService } from './servidor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Servidor])], 
  controllers: [ServidorController],
  providers: [ServidorService],
  exports: [ServidorService],  
})
export class ServidorModule {}
