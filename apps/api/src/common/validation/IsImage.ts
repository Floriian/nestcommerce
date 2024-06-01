import {
  ValidationArguments,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';

export function IsImage(validationOptions?: ValidationOptions) {
  return function (object: unknown, propertyName: string) {
    return registerDecorator({
      name: 'IsImage',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (value?.mimetype && 'image/*'.includes(value?.mimetype)) {
            return true;
          }
          return false;
        },
      },
    });
  };
}
