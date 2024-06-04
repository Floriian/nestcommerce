import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/ParseMongoId.pipe';
import { ObjectId } from 'mongoose';
import { Public } from 'src/auth/decorators/public.decorator';
import { CategoryFindAllQueryDto } from './dto/CategoryFindAllQueryDto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Public()
  @Get()
  findAll(@Query() { page, limit }: CategoryFindAllQueryDto) {
    return this.categoryService.findAll(page, +limit);
  }

  @Get('/admin')
  findAllForAdmin(@Query() dto: CategoryFindAllQueryDto) {
    return this.categoryService.findForAdmin(dto);
  }

  @Get(':id')
  findOne(@Param('id', ParseMongoIdPipe) id: ObjectId) {
    return this.categoryService.findOne(id);
  }

  @Get('/url/:url')
  findByUrl(@Param('url') url: string) {
    return this.categoryService.findByUrl(url);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
