import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Model } from 'mongoose';
import { Category } from 'src/category/entities/category.entity';
import { UniqueProp } from 'src/common/database/UniqueProp.decorator';

@Schema({ timestamps: true })
export class Product {
  @UniqueProp()
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  category: Category;
}

export type ProductDocument = HydratedDocument<Product>;
export type ProductModel = Model<Product>;
export const ProductSchema = SchemaFactory.createForClass(Product);
