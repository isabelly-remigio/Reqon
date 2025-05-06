import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Requerimento } from './requerimento.entity';
import { RequerimentoService } from './requerimento.service';
import { RequerimentoController } from './requerimento.controller';
import * as path from 'path';

@Module({
  imports: [
    TypeOrmModule.forFeature([Requerimento]),
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads', 
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = path.extname(file.originalname); 
          const basename = path.basename(file.originalname, ext); 
          cb(null, `${basename}-${uniqueSuffix}${ext}`); 
        },
      }),
    }),
  ],
  controllers: [RequerimentoController],
  providers: [RequerimentoService],
})
export class RequerimentoModule {}
