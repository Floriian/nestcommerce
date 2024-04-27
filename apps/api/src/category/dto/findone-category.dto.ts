import { IsMongoId, IsNotEmpty } from 'class-validator';

export class FindOneCategoryDto {
  @IsMongoId()
  @IsNotEmpty()
  id: string;
}
