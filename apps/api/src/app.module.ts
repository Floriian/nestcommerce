import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { EnvModule } from './env/env.module';
import { ConfigModule } from '@nestjs/config';
import { validateEnv } from './env/env';
import { SessionMiddleware } from './session/session.middleware';
import { CategoryModule } from './category/category.module';
import { CacheModule } from '@nestjs/cache-manager';
import { cacheConfig, mongooseConfig } from './config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { SessionModule } from './session/session.module';
import { UserModule } from './user/user.module';
import { RedisModule } from './redis/redis.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './auth/guards/access-token.guard';

@Module({
  imports: [
    CacheModule.registerAsync(cacheConfig),
    MongooseModule.forRootAsync(mongooseConfig),
    ConfigModule.forRoot({
      validate: validateEnv,
      isGlobal: true,
    }),
    EnvModule,
    CategoryModule,
    ProductModule,
    CartModule,
    AuthModule,
    SessionModule,
    UserModule,
    RedisModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: AtGuard }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SessionMiddleware).forRoutes('*');
  }
}
