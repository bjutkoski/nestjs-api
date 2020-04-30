import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';
import { CreateProductDTO } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  products: Product[] = [];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    return this.products.find(product => product.id === id);
  }

  async create(product: CreateProductDTO): Promise<Product> {
    return this.productRepository.save(product);
  }

  delete(id: number): Product[] {
    const index = this.products.findIndex(product => product.id === id);
    if (index > -1) this.products.splice(index, 1);
    return this.products;
  }
}
