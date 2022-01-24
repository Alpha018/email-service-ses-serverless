import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class AppController {
  @Get()
  async check(): Promise<any> {
    return 'hello';
  }
}
