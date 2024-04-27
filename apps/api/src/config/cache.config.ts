import { CacheModuleAsyncOptions } from '@nestjs/cache-manager';
import { EnvModule } from 'src/env/env.module';
import { EnvService } from 'src/env/env.service';
import { redisStore } from 'cache-manager-redis-store';

export const cacheConfig: CacheModuleAsyncOptions = {
  imports: [EnvModule],
  useFactory: async (envService: EnvService) => {
    const store = await redisStore({
      socket: {
        host: envService.get('REDIS_URL') as string,
        port: envService.get('REDIS_PORT') as number,
      },
    });
    return {
      store: () => store,
    };
  },
  inject: [EnvService],
};
