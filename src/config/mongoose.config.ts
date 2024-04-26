import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { EnvModule } from 'src/env/env.module';
import { EnvService } from 'src/env/env.service';

export const mongooseConfig: MongooseModuleAsyncOptions = {
  imports: [EnvModule],
  useFactory: async (envService: EnvService) => {
    const url = await envService.get('MONGO_URL');
    return {
      uri: url as string,
    };
  },
  inject: [EnvService],
};
