import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import * as SES from 'aws-sdk/clients/ses';
import { EmailServiceConfig } from '../../config/email-service.config';
import { TemplateName, TemplateService } from './template.service';
import { createContextWinston } from '../../utils/logger';

export interface EmailConfig {
  to: string | string[];
  subject: string;
}

@Injectable()
export class EmailService {
  ses = new SES({
    accessKeyId: this.configService.awsConfig.accessKey,
    secretAccessKey: this.configService.awsConfig.secretAccessKey,
    region: this.configService.awsConfig.region,
    apiVersion: '2010-12-01',
  });

  constructor(
    private readonly configService: EmailServiceConfig,
    private readonly templateService: TemplateService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  async sendEmail(
    templateName: TemplateName,
    emailData: EmailConfig,
    data: unknown,
    sender: string,
  ) {
    const meta = createContextWinston(
      this.constructor.name,
      this.sendEmail.name,
    );

    const senderEmail = this.configService.awsConfig.senders[sender];

    if (!senderEmail) {
      this.logger.error('Email not exist in the system', { ...meta, sender });
      throw new BadRequestException('The sender email not exist in the system');
    }

    try {
      const emailBody = this.templateService.getTemplateString(
        templateName,
        data,
      );
      const emailSesData = this._generateEmailJson(
        emailBody,
        emailData,
        senderEmail,
      );
      await this.ses.sendEmail(emailSesData);
      return { status: 'ok' };
    } catch (e) {
      this.logger.error(e, { ...meta });
      throw new InternalServerErrorException('Error in send email', e.message);
    }
  }

  _generateEmailJson(body: string, emailData: EmailConfig, sender: string) {
    return {
      Destination: {
        ToAddresses:
          typeof emailData.to === 'string' ? [emailData.to] : [...emailData.to],
      },
      Message: {
        Body: {
          Html: {
            Data: body,
            Charset: 'utf-8',
          },
        },
        Subject: {
          Data: emailData.subject,
          Charset: 'utf-8',
        },
      },
      Source: sender,
    };
  }
}
