import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { validationPipeConfig } from './config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: ['http://localhost:5173'] },
  });

  app.useGlobalPipes(new ValidationPipe(validationPipeConfig));
  app.use(cookieParser());

  await app.listen(3000);
}
bootstrap();
