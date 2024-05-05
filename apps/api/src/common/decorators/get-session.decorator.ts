import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const GetSession = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const cookie = request.cookies[process.env.COOKIE_NAME];
    return cookie;
  },
);
