import { NotFoundException } from '@nestjs/common';

export class CategoryNotFoundException extends NotFoundException {
  constructor() {
    super('Category with given ID is not found.');
  }
}
