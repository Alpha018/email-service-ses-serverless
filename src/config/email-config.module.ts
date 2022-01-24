import { Module } from '@nestjs/common';
import { EmailServiceConfig } from './email-service.config';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [EmailServiceConfig, ConfigService],
  exports: [EmailServiceConfig],
})
export class EmailConfigModule {}
