import { Test, TestingModule } from '@nestjs/testing';
import { RequerimentoController } from './requerimento.controller';

describe('RequerimentoController', () => {
  let controller: RequerimentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequerimentoController],
    }).compile();

    controller = module.get<RequerimentoController>(RequerimentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
