import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { randomUUID } from 'node:crypto';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class SessionMiddleware implements NestMiddleware {
  constructor(
    @Inject(RedisService) private readonly redisService: RedisService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const sessionId = req.cookies.nest_commerce;
    const result = sessionId && (await this.redisService.hGetAll(sessionId));

    if (!result) {
      const newSessionId = randomUUID();
      await this.redisService.hSet(newSessionId);
      res.cookie('nest_commerce', newSessionId);
    }

    next();
  }
}
