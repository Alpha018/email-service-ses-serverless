import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { loggerOptions } from './utils/logger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: WinstonModule.createLogger(loggerOptions),
  });
  const configService = app.get(ConfigService);
  const environment =
    configService.get<string>('NODE_ENV') || process.env.NODE_ENV;
  const port = configService.get<number>('PORT') || 3333;
  let globalPrefix = 'api';

  if (environment !== 'develop') {
    globalPrefix = 'customer/api';
  }

  app.enableCors({
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    preflightContinue: false,
  });
  app.setGlobalPrefix(globalPrefix);

  const config = new DocumentBuilder()
    .setTitle('Customer Service')
    .setDescription('This is the api doc for customer service')
    .setVersion('1.0')
    .addTag('financial')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
