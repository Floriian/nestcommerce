import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { Types } from 'mongoose';
@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: any): Types.ObjectId {
    const isValid = Types.ObjectId.isValid(value);

    if (!isValid) throw new BadRequestException('ID is not ObjectID.');

    return Types.ObjectId.createFromHexString(value);
  }
}
