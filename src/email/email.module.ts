import { Module } from '@nestjs/common';
import { TemplateService } from './service/template.service';
import { EmailController } from './controller/email.controller';
import { EmailConfigModule } from '../config/email-config.module';
import { EmailService } from './service/email.service';

@Module({
  imports: [EmailConfigModule],
  providers: [TemplateService, EmailService],
  controllers: [EmailController],
})
export class EmailModule {}
