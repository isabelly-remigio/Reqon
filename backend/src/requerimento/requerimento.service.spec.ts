import { Test, TestingModule } from '@nestjs/testing';
import { RequerimentoService } from './requerimento.service';

describe('RequerimentoService', () => {
  let service: RequerimentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequerimentoService],
    }).compile();

    service = module.get<RequerimentoService>(RequerimentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
