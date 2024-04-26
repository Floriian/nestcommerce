import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import { UniqueProp } from 'src/common/database/UniqueProp.decorator';

@Schema({ timestamps: true })
export class Category {
  @UniqueProp()
  name: string;

  @UniqueProp()
  url: string;
}

export type CategoryDocument = HydratedDocument<Category>;
export type CategoryModel = Model<Category>;
export const CategorySchema = SchemaFactory.createForClass(Category);
