import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryModel } from './entities/category.entity';
import mongoose from 'mongoose';
import { CategoryExistsException } from './exceptions/CategoryExists.exception';
import { FindOneCategoryDto } from './dto/findone-category.dto';
import { CategoryNotFoundException } from './exceptions/CategoryNotFound.exception';

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
    }
  }

  async findAll() {
    return await this.categoryModel.find();
  }

  async findOne(params: FindOneCategoryDto) {
    const category = await this.categoryModel.findById(params.id);
    if (!category) throw new CategoryNotFoundException();
    return category;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
