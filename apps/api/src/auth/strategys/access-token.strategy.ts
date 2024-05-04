import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from '../jwt-payload';
import type { Request } from 'express';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        async (req: Request) => {
          const { nest_commerce } = req.cookies;

          const { access_token } = await this.cache.get<{
            access_token: string;
          }>(`${nest_commerce}`);

          return access_token;
        },
      ]),
      secretOrKey: process.env.AT_SECRET,
    });
  }
  validate(payload: JwtPayload) {
    return payload;
  }
}
