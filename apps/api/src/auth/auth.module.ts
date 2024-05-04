import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AccessTokenStrategy } from './strategys/access-token.strategy';
import { RefreshTokenStrategy } from './strategys/refresh-token.strategy';
import { CacheModule } from '@nestjs/cache-manager';
import { cacheConfig } from 'src/config';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/entities/User.entity';
import { EnvModule } from 'src/env/env.module';
import { SessionModule } from 'src/session/session.module';

@Module({
  imports: [
    EnvModule,
    SessionModule,
    JwtModule.register({}),
    CacheModule.registerAsync(cacheConfig),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService, AccessTokenStrategy, RefreshTokenStrategy],
})
export class AuthModule {}
