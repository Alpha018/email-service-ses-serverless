import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class AppController {
  @Get()
  async check(): Promise<any> {
    return {
      status: 'ok',
      'node-version': process.version,
      memory: process.memoryUsage(),
      pid: process.pid,
      uptime: process.uptime(),
    };
  }
}
