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

  test('should return success node env', () => {
    expect(config.nodeConfig.nodeEnv).toBe(emailServiceEnvMock.NODE_ENV);
  });

  test('should return success config of aws', () => {
    expect(config.awsConfig.region).toBe(emailServiceEnvMock.AWS_REGION);
    expect(config.awsConfig.senders).toMatchObject(
      JSON.parse(emailServiceEnvMock.AWS_EMAIL_SENDER_OBJECT),
    );
    expect(config.awsConfig.secretAccessKey).toBe(
      emailServiceEnvMock.AWS_SECRET_ACCESS_KEY,
    );
    expect(config.awsConfig.accessKey).toBe(emailServiceEnvMock.AWS_ACCESS_KEY);
  });
});
