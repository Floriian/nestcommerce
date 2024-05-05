import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { randomUUID } from 'node:crypto';
import { Token } from 'src/auth/token';
import { EnvService } from 'src/env/env.service';
import { RedisService } from 'src/redis/redis.service';
import { SessionExpiredException } from './exceptions/session-expired.exception';

@Injectable()
export class SessionMiddleware implements NestMiddleware {
  constructor(
    @Inject(RedisService) private readonly redisService: RedisService,
    @Inject(EnvService) private readonly envService: EnvService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    if (!req.context) {
      req.context = {};
    }
    const cookieName = this.envService.get('COOKIE_NAME') as string;
    const sessionId = req.cookies[cookieName];

    if (!sessionId) {
      const newSessionId = randomUUID();
      await this.redisService.hSet(
        newSessionId,
        'createdAt',
        new Date().toISOString(),
      );
      res.cookie(cookieName, newSessionId);
      req.cookies[cookieName] = newSessionId;
    }

    if (sessionId) {
      const tokens = await this.redisService.hGetAll(`${sessionId}`);

      if (tokens.access_token && tokens.refresh_token) {
        req.context.tokens = tokens as unknown as Token;
      } else {
        res.clearCookie(cookieName);
        throw new SessionExpiredException();
      }
    }

    next();
  }
}
