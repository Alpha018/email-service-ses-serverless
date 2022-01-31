import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailServiceConfig {
  constructor(private config: ConfigService) {}

  get nodeConfig(): {
    nodeEnv: string;
  } {
    return {
      nodeEnv: this.config.get<string>('NODE_ENV'),
    };
  }

  get awsConfig(): {
    accessKey: string;
    secretAccessKey: string;
    region: string;
    senders: unknown;
  } {
    return {
      accessKey: this.config.get<string>('AWS_SES_ACCESS_KEY'),
      secretAccessKey: this.config.get<string>('AWS_SES_SECRET_ACCESS_KEY'),
      region: this.config.get<string>('AWS_SES_REGION'),
      senders: {
        ...JSON.parse(this.config.get('AWS_EMAIL_SENDER_LIST')),
      },
    };
  }
}
