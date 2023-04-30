import { Test, TestingModule } from '@nestjs/testing';
import { PclubService } from './pclub.service';

describe('PclubService', () => {
  let service: PclubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PclubService],
    }).compile();

    service = module.get<PclubService>(PclubService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
