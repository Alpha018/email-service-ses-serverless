import { EmailServiceConfig } from './email-service.config';
import { ConfigService } from '@nestjs/config';
import {
  configServiceMock,
  emailServiceEnvMock,
} from '../__mocks__/email-service.mock';
import { Test } from '@nestjs/testing';

describe('EmailServiceConfig', () => {
  let config: EmailServiceConfig;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        EmailServiceConfig,
        {
          provide: ConfigService,
          useValue: configServiceMock,
        },
      ],
    }).compile();
    config = moduleRef.get(EmailServiceConfig);
  });

  test('should return success apiBaseUrl', () => {
    expect(config.nodeConfig.nodeEnv).toBe(emailServiceEnvMock.NODE_ENV);
  });
});
