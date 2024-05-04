import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { RedisStore } from 'cache-manager-redis-store';

@Injectable()
export class RedisService {
  private readonly redis: RedisStore;
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {
    this.redis = cacheManager.store as unknown as RedisStore;
  }

  public async hSet(key: string, field?: string, value?: string) {
    const client = this.redis.getClient();
    await client.hSet(key, field, value);
  }

  public async hGetAll(key: string) {
    const client = this.redis.getClient();
    return await client.hGetAll(key);
  }

  public async hDel(key: string, field) {
    const client = this.redis.getClient();
    return await client.hDel(key, field);
  }

  public async del(key: string[] | string) {
    const client = this.redis.getClient();
    return await client.del(key);
  }

  public async get<T>(key: string) {
    return this.cacheManager.get<T>(key);
  }
}
