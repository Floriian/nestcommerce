import {
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
  validateSync,
} from 'class-validator';
import { plainToInstance } from 'class-transformer';

export class Env {
  @IsString()
  @IsNotEmpty()
  MONGO_URL: string;

  @IsString()
  @IsNotEmpty()
  REDIS_URL: string;

  @IsNotEmpty()
  @IsNumber()
  REDIS_PORT: number;
}

export const validateEnv = (env: Record<string, unknown>) => {
  const converted = plainToInstance(Env, env, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(converted);

  if (errors.length > 0) throw new Error(errors.toString());

  return converted;
};