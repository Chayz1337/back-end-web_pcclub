import { Test, TestingModule } from '@nestjs/testing';
import { PclubController } from './pclub.controller';

describe('PclubController', () => {
  let controller: PclubController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PclubController],
    }).compile();

    controller = module.get<PclubController>(PclubController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
