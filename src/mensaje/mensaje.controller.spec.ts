import { Test, TestingModule } from '@nestjs/testing';
import { MensajeController } from './mensaje.controller';

describe('MensajeController', () => {
  let controller: MensajeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MensajeController],
    }).compile();

    controller = module.get<MensajeController>(MensajeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
