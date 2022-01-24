import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

import { EmailServiceConfig } from './email-service.config';
import { EmailServiceValidateConfig } from './email-service.validate.config';
import { ConfigModule } from '@nestjs/config';

describe('E2E CustomerServiceConfig', () => {
  let app: INestApplication;
  let config: EmailServiceConfig;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          validate: EmailServiceValidateConfig,
        }),
      ],
      providers: [EmailServiceConfig],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();

    config = app.get(EmailServiceConfig);
  });

  afterAll(async () => {
    await app.close();
  });

  test('should be a valid config instance', () => {
    expect(config).toBeInstanceOf(EmailServiceConfig);
  });
});
