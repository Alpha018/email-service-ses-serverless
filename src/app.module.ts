import * as helmet from 'helmet';

import { ConfigModule } from '@nestjs/config';
import { EmailServiceValidateConfig } from './config/email-service.validate.config';
import { EmailServiceConfig } from './config/email-service.config';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { WinstonModule } from 'nest-winston';

import { AppController } from './app.controller';
import { loggerOptions } from './utils/logger';
import { HttpModule } from '@nestjs/axios';
import { EmailConfigModule } from './config/email-config.module';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validate: EmailServiceValidateConfig,
    }),
    TerminusModule,
    WinstonModule.forRoot(loggerOptions),
    EmailConfigModule,
  ],
  providers: [EmailServiceConfig],
  controllers: [AppController],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(helmet())
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
