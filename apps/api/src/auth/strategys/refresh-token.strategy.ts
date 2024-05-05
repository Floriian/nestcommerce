import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { JwtPayload } from '../jwt-payload';
import { RedisService } from 'src/redis/redis.service';
import { EnvService } from 'src/env/env.service';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(
    private readonly redisService: RedisService,
    private readonly envService: EnvService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => {
          return req.context?.tokens?.refresh_token;
        },
      ]),
      secretOrKey: envService.get('RT_SECRET'),
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: JwtPayload) {
    const cookieName = this.envService.get('COOKIE_NAME') as string;
    const cookie = req.cookies[cookieName];
    const { refresh_token } = await this.redisService.hGetAll(cookie);
    return { ...payload, refresh_token };
  }
}
