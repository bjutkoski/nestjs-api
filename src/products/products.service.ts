import { Injectable, NotFoundException } from '@nestjs/common';
import { Product, UpdateProduct } from './interfaces/product.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { ProductEntity } from './product.entity';
import { CreateProductDTO } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne(id);
    if (!product) {
      throw new NotFoundException('product not found');
    }
    return product;
  }

  async create(product: CreateProductDTO): Promise<Product> {
    return this.productRepository.save(product);
  }

  async update(id: number, product: UpdateProduct): Promise<Product> {
    const productToUpdate = await this.productRepository.findOne(id);
    if (!productToUpdate) {
      throw new NotFoundException('product not found');
    }
    await this.productRepository.merge(productToUpdate, product);
    return this.productRepository.save(productToUpdate);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.productRepository.delete(id);
  }
}
