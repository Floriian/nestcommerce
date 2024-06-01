import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryModel } from './entities/category.entity';
import mongoose, { ObjectId } from 'mongoose';
import { CategoryExistsException } from './exceptions/CategoryExists.exception';
import { FindOneCategoryDto } from './dto/findone-category.dto';
import { CategoryNotFoundException } from './exceptions/CategoryNotFound.exception';
import { CategoryFindAllQueryDto } from './dto/CategoryFindAllQueryDto';
import { PaginationResponse } from 'src/types';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel: CategoryModel,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const category = new this.categoryModel(createCategoryDto);
      await category.save();
      return category;
    } catch (e) {
      if (e instanceof mongoose.mongo.MongoServerError) {
        if (e.code == 11000) throw new CategoryExistsException();
      }
      throw e;
    }
  }

  async findAll(cursor: string, limit: number) {
    const query = cursor ? { _id: { $gt: cursor }, active: true } : {};
    const category = await this.categoryModel
      .find(query)
      .sort({ _id: 1 })
      .limit(limit);
    return category;
  }

  async findForAdmin(
    page: number,
    limit: number,
  ): Promise<PaginationResponse<Category[]>> {
    const categories = await this.categoryModel
      .find()
      .sort({ _id: 1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const count = await this.categoryModel.countDocuments();
    const defaultLimit = limit ? limit : 15;
    const totalPages = Math.ceil(count / defaultLimit);

    return {
      data: categories,
      pages: totalPages,
    };
  }

  async findOne(id: ObjectId) {
    const category = await this.categoryModel.findById(id);
    if (!category) throw new CategoryNotFoundException();
    return category;
  }

  async findByUrl(url: string) {
    const categoryProducts = await this.categoryModel
      .find({
        url,
      })
      .populate('products');
    if (!categoryProducts) throw new CategoryNotFoundException();
    return categoryProducts;
  }

  async addProductToCategory(categoryId: string, productId: string) {
    return await this.categoryModel.findByIdAndUpdate(categoryId, {
      $push: { products: productId },
    });
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    await this.findOne(id as unknown as ObjectId);

    return await this.categoryModel.findByIdAndUpdate(id, updateCategoryDto);
  }

  async remove(id: string) {
    await this.findOne(id as unknown as ObjectId);

    try {
      await this.categoryModel
        .findOneAndDelete({
          $where: () => this['_id'] === id,
        })
        .populate('products');
      return { success: true };
    } catch (e) {
      console.log(e);
      return { success: false, e };
    }
  }
}
