import { BadRequestException, ValidationPipeOptions } from '@nestjs/common';

export const validationPipeConfig: ValidationPipeOptions = {
  exceptionFactory: (errors) => {
    return new BadRequestException({
      statusCode: 400,
      error: 'Bad Request',
      errors: errors.reduce(
        (acc, e) => ({
          ...acc,
          [e.property]: Object.values(e.constraints),
        }),
        {},
      ),
    });
  },
};
