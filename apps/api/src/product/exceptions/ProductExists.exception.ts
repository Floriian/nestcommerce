import { ConflictException } from '@nestjs/common';

export class ProductExistsException extends ConflictException {
  constructor() {
    super('Product already exists.');
  }
}
