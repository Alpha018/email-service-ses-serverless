import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from '../service/email.service';
import { EmailRequestDto } from '../dto/email.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  sendEmail(@Body() body: EmailRequestDto) {
    return this.emailService.sendEmail(
      body.templateName,
      {
        to: body.email,
        subject: body.subject,
      },
      body.data,
      body.sender,
    );
  }
}
