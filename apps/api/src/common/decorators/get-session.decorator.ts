import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const GetSession = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const cookie = request.cookies['nest_commerce'];
    console.log('cookie', cookie);
    return cookie;
  },
);
