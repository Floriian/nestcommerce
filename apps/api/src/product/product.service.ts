import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductModel } from './entities/product.entity';
import { CategoryService } from 'src/category/category.service';
import mongoose from 'mongoose';
import { ProductExistsException } from './exceptions/ProductExists.exception';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: ProductModel,
    private readonly categoryService: CategoryService,
  ) {}
  async create(createProductDto: CreateProductDto) {
    try {
      const product = new this.productModel({
        ...createProductDto,
        category: createProductDto.categoryId,
      });
      const savedProduct = await product.save();

      await this.categoryService.addProductToCategory(
        createProductDto.categoryId,
        savedProduct.id,
      );

      return savedProduct;
    } catch (e) {
      if (e instanceof mongoose.mongo.MongoServerError) {
        if (e.code == 11000) throw new ProductExistsException();
      }
    }
  }

  async findAll() {
    return await this.productModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
