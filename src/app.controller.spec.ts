import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { TerminusModule } from '@nestjs/terminus';
import { WinstonModule } from 'nest-winston';

import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;
  let module: TestingModule;

  beforeAll(async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    module = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({}),
        WinstonModule.forRoot({ silent: true }),
      ],
    }).compile();
  });

  beforeEach(async () => {
    jest.clearAllMocks();
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({}),
        TerminusModule,
        WinstonModule.forRoot({ silent: true }),
      ],
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('Testing Response', () => {
    it('Expect to get status', async () => {
      const healthData = await appController.check();

      expect(healthData).toBeDefined();
    });
  });
});
