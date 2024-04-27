import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Model } from 'mongoose';
import { UniqueProp } from 'src/common/database/UniqueProp.decorator';
import { Product } from 'src/product/entities/product.entity';

@Schema({ timestamps: true })
export class Category {
  @UniqueProp()
  name: string;

  @UniqueProp()
  url: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
  products: Product[];

  @Prop({ default: true })
  active: boolean;
}

export type CategoryDocument = HydratedDocument<Category>;
export type CategoryModel = Model<Category>;
export const CategorySchema = SchemaFactory.createForClass(Category);
