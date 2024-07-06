import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductFindAllQueryDto } from './dto/product-find-all-query.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/ParseMongoId.pipe';
import { ObjectId } from 'mongoose';

@Controller('product/admin')
export class ProductAdminController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(@Query() dto: ProductFindAllQueryDto) {
    return this.productService.findAllForAdmin(dto);
  }

  @Get(':id')
  findOneForAdmin(@Param('id', ParseMongoIdPipe) id: ObjectId) {
    return this.productService.findOneForAdmin(id);
  }
}
