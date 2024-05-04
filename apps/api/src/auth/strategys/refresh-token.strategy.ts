import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { JwtPayload } from '../jwt-payload';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        async (req: Request) => {
          const { nest_commerce } = req.cookies;

          const { refresh_token } = await this.cache.get<{
            refresh_token: string;
          }>(`${nest_commerce}`);

          return refresh_token;
        },
      ]),
      secretOrKey: process.env.RT_SECRET,
      passReqToCallback: true,
    });
  }

  validate(req: Request, payload: JwtPayload) {
    const refreshToken = req.cookies.refresh_token;
    return { ...payload, refreshToken };
  }
}
