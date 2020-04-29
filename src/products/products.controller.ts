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
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './interfaces/product.interface';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';

@Controller('products')
@UseFilters(HttpExceptionFilter)
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
    // return this.productService.delete(params.id);
    // throw new HttpException('deu pau', HttpStatus.BAD_REQUEST);
    // throw new ForbiddenException();
    throw new NotFoundException('Não encontrado');
  }
}
