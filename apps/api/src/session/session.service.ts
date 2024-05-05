import { Injectable } from '@nestjs/common';

import { Token } from 'src/auth/token';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class SessionService {
  constructor(private readonly redisService: RedisService) {}

  async createSession(sessionId: string, tokens: Token): Promise<boolean> {
    try {
      await this.redisService.hSet(
        sessionId,
        'access_token',
        tokens.access_token,
      );
      await this.redisService.hSet(
        sessionId,
        'refresh_token',
        tokens.refresh_token,
      );
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  async destroy(sessionId: string) {
    try {
      await this.redisService.del(sessionId);
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
