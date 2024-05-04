import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { cacheConfig } from 'src/config';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [CacheModule.registerAsync(cacheConfig)],
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}
