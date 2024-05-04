import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  providers: [SessionService],
  imports: [RedisModule],
  exports: [SessionService],
})
export class SessionModule {}
