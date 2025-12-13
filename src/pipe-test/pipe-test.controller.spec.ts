import { Test, TestingModule } from '@nestjs/testing';
import { PipeTestController } from './pipe-test.controller';

describe('PipeTestController', () => {
  let controller: PipeTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PipeTestController],
    }).compile();

    controller = module.get<PipeTestController>(PipeTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
