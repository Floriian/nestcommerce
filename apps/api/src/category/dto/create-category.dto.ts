import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IsImage } from 'src/common/validation/IsImage';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  url: string;

  @IsOptional()
  image: File;
}
