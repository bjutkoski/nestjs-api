import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  async find(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Product> {
    return this.productService.findOne(params.id);
  }

  @Post()
  async create(@Body() product: CreateProductDTO): Promise<Product[]> {
    return this.productService.create(product);
  }

  @Put()
  update(): string {
    return 'update product';
  }

  @Delete(':id')
  async delete(@Param() params): Promise<Product[]> {
    return this.productService.delete(params.id);
  }
}
