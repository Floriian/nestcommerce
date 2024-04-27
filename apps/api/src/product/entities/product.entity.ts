import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Model } from 'mongoose';
import { Category } from 'src/category/entities/category.entity';
import { BaseEntity } from 'src/common/database/BaseEntity';

@Schema({ timestamps: true })
export class Product extends BaseEntity {
  @Prop({ required: true })
  price: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  category: Category;
}

export type ProductDocument = HydratedDocument<Product>;
export type ProductModel = Model<Product>;
export const ProductSchema = SchemaFactory.createForClass(Product);
