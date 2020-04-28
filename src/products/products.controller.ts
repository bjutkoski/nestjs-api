import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('ab*cd')
  pattern(): string {
    return 'pattern';
  }

  @Get()
  findAll(): string {
    return 'find all';
  }

  @Get(':id')
  findOne(): string {
    return 'find one';
  }

  @Post()
  create(): string {
    return 'new product';
  }

  @Put()
  update(): string {
    return 'update product';
  }

  @Delete()
  delete(): string {
    return 'delete product';
  }
}
