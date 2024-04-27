import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class SessionMiddleware implements NestMiddleware {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const host = req.headers['x-forwarded-for'] || req.ip;

    const result = await this.cacheManager.get(`${host}`);
    if (!result)
      await this.cacheManager.set(
        host as string,
        JSON.stringify({ hello: 'world ' }),
      );

    next();
  }
}
