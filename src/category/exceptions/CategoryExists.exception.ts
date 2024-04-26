import { ConflictException } from '@nestjs/common';

export class CategoryExistsException extends ConflictException {
  constructor() {
    super('Category already exists.');
  }
}
