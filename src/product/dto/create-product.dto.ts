import {
  IsMongoId,
  IsNotEmpty,
  IsNumberString,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumberString()
  price: number;

  @IsMongoId()
  @IsNotEmpty()
  categoryId: string;
}
