import { BadRequestException } from '@nestjs/common';

export class CredentialsTakenException extends BadRequestException {
  constructor() {
    super('Credentials are taken');
  }
}
