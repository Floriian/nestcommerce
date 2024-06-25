import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductModel } from './entities/product.entity';
import { CategoryService } from 'src/category/category.service';
import mongoose, { FilterQuery, ObjectId } from 'mongoose';
import { ProductExistsException } from './exceptions/ProductExists.exception';
import { PaginationResponse } from 'src/types';
import { ProductFindAllQueryDto } from './dto/product-find-all-query.dto';

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
    return await this.productModel.find({ active: true });
  }

  async findAllForAdmin(
    dto: ProductFindAllQueryDto,
  ): Promise<PaginationResponse<Product[]>> {
    const regexp = new RegExp(dto.text, 'i');

    const filterOptions: FilterQuery<Product> = dto
      ? {
          ...(dto.text && { name: { $regex: regexp } }),
          ...(dto.active !== 'ALL' ? { active: dto.active } : {}),
        }
      : {};

    const count = await this.productModel.countDocuments(filterOptions);
    const defaultLimit = +dto.limit ? +dto.limit : 15;
    const totalPages = Math.ceil(count / defaultLimit);

    if (totalPages < +dto.page) dto.page = '1';

    const products = await this.productModel
      .find(filterOptions)
      .sort({ _id: 1 })
      .skip((+dto.page - 1) * +dto.limit)
      .limit(+dto.limit);

    return {
      data: products,
      page: +dto.page,
      pages: totalPages,
    };
  }

  async findOneForAdmin(id: ObjectId) {
    return await this.productModel.findById(id);
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
