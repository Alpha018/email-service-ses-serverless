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
}
