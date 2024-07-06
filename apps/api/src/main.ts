import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { validationPipeConfig } from './config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: [
        'http://localhost:5173',
        'http://localhost:8080',
        'http://localhost:5174',
      ],
      credentials: true,
    },
  });

  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe(validationPipeConfig));
  app.setGlobalPrefix('api');

  await app.listen(3000);
}
bootstrap();
