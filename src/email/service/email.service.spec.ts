import { Test, TestingModule } from '@nestjs/testing';
import { WinstonModule } from 'nest-winston';
import { loggerOptions } from '../../utils/logger';
import { TemplateName, TemplateService } from './template.service';
import { EmailService } from './email.service';
import { EmailServiceConfig } from '../../config/email-service.config';
import { emailServiceEnvMock } from '../../__mocks__/email-service.mock';
import { EmailConfigModule } from '../../config/email-config.module';

jest.mock('aws-sdk/clients/ses', () => {
  const mSES = {
    sendEmail: jest.fn().mockReturnThis(),
    promise: jest.fn().mockImplementation(() => {
      return { MessageId: 1 };
    }),
  };
  return jest.fn(() => mSES);
});

process.env = Object.assign(process.env, {
  ...emailServiceEnvMock,
});

describe('Email Service', () => {
  let emailService: EmailService;
  let configService: EmailServiceConfig;
  let templateService: TemplateService;

  const templateStringMock = '<h2>this is a simple ejs, Test</h2>';
  const errorMessage = 'Error in send email';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        EmailConfigModule,
        WinstonModule.forRoot({ ...loggerOptions, silent: true }),
      ],
      providers: [TemplateService, EmailService],
    }).compile();

    emailService = module.get<EmailService>(EmailService);
    templateService = module.get<TemplateService>(TemplateService);
    configService = module.get<EmailServiceConfig>(EmailServiceConfig);
  });

  it('should be defined', () => {
    expect(emailService).toBeDefined();
    expect(configService).toBeDefined();
    expect(templateService).toBeDefined();
  });

  describe('Send email with AWS SES', () => {
    it('Should get a object with status ok in result', async () => {
      templateService.getTemplateString = jest
        .fn()
        .mockImplementation(() => templateStringMock);
      emailService._generateEmailJson = jest.fn().mockImplementation(() => {
        return {
          data: 'mock',
        };
      });

      const result = await emailService.sendEmail(
        TemplateName.TEST,
        {
          to: 'what--ever@whatever.cl',
          subject: 'whatever',
        },
        {
          test: 'test',
        },
        'default',
      );

      expect(result).toBeDefined();
      expect(result.status).toBe('ok');
    });

    it('Should get a error with not found sender', async () => {
      try {
        await emailService.sendEmail(
          TemplateName.TEST,
          {
            to: 'what--ever@whatever.cl',
            subject: 'whatever',
          },
          {
            test: 'test',
          },
          'no-sender',
        );
      } catch (error) {
        expect(error).toBeDefined();
        expect(error.message).toBe('The sender email not exist in the system');
        expect(error.status).toBe(400);
      }
    });

    it('Should get a error in get template', async () => {
      templateService.getTemplateString = jest.fn().mockImplementation(() => {
        throw new Error();
      });

      try {
        await emailService.sendEmail(
          TemplateName.TEST,
          {
            to: 'what-ever@whatever.cl',
            subject: 'whatever',
          },
          {
            test: 'test',
          },
          'default',
        );
      } catch (error) {
        expect(error).toBeDefined();
        expect(error.message).toBe(errorMessage);
        expect(error.status).toBe(500);
      }
    });

    it('Should get a error in generate json', async () => {
      templateService.getTemplateString = jest
        .fn()
        .mockImplementation(() => templateStringMock);
      emailService._generateEmailJson = jest.fn().mockImplementation(() => {
        throw new Error();
      });

      try {
        await emailService.sendEmail(
          TemplateName.TEST,
          {
            to: 'what-ever-@whatever.cl',
            subject: 'whatever',
          },
          {
            test: 'test',
          },
          'default',
        );
      } catch (error) {
        expect(error).toBeDefined();
        expect(error.message).toBe(errorMessage);
        expect(error.status).toBe(500);
      }
    });

    it('Should get a error in send email', async () => {
      templateService.getTemplateString = jest
        .fn()
        .mockImplementation(() => templateStringMock);
      emailService._generateEmailJson = jest.fn().mockImplementation(() => {
        throw new Error();
      });

      try {
        await emailService.sendEmail(
          TemplateName.TEST,
          {
            to: 'what-ever@whatever.cl',
            subject: 'whatever',
          },
          {
            test: 'test',
          },
          'default',
        );
      } catch (error) {
        expect(error).toBeDefined();
        expect(error.message).toBe(errorMessage);
        expect(error.status).toBe(500);
      }
    });
  });

  describe('Get JSON email config to aws', () => {
    it('Should get a object with email config with 1 destination', async () => {
      const result = emailService._generateEmailJson(
        templateStringMock,
        {
          to: 'whatever@whatever.cl',
          subject: 'whatever',
        },
        'default',
      );

      expect(result).toBeDefined();
      expect(result.Destination.ToAddresses.length).toBe(1);
      expect(result.Message.Body.Html.Data).toBe(templateStringMock);
      expect(result.Message.Subject.Data).toBe('whatever');
    });

    it('Should get a object with email config with 2 destination', async () => {
      const result = emailService._generateEmailJson(
        templateStringMock,
        {
          to: ['whatever@whatever.cl', 'whateveranother@whatever.cl'],
          subject: 'whatever',
        },
        'default',
      );

      expect(result).toBeDefined();
      expect(result.Destination.ToAddresses.length).toBe(2);
      expect(result.Message.Body.Html.Data).toBe(templateStringMock);
      expect(result.Message.Subject.Data).toBe('whatever');
    });
  });
});
