import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './entities/product.entity';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [
    CategoryModule,
    MongooseModule.forFeature([
      {
        schema: ProductSchema,
        name: Product.name,
      },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
