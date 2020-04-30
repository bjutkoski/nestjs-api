import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpException,
  HttpStatus,
  ForbiddenException,
  NotFoundException,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { TransformInterceptor } from 'src/common/interceptors/transform.interceptor';
import { DeleteResult } from 'typeorm';
import { UpdateProductDTO } from './dto/update-product.dto';

@Controller('products')
// @UseFilters(HttpExceptionFilter)
@UseInterceptors(TransformInterceptor)
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  async find(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Post()
  async create(@Body() product: CreateProductDTO): Promise<Product> {
    return this.productService.create(product);
  }

  @Put(':id')
  async update(
    @Param('id') id,
    @Body() product: UpdateProductDTO,
  ): Promise<Product> {
    return this.productService.update(id, product);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<DeleteResult> {
    return this.productService.delete(id);
  }
}
