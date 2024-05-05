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
        (req: Request) => {
          return req.context?.tokens?.access_token;
        },
      ]),
      secretOrKey: process.env.AT_SECRET,
    });
  }
  validate(payload: JwtPayload) {
    return payload;
  }
}
