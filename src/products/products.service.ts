import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: string): Product {
    return this.products.find(product => product.id === id);
  }

  create(product: Product) {
    this.products.push(product);
    return this.products;
  }

  delete(id: string): Product[] {
    const index = this.products.findIndex(product => product.id === id);
    if (index > -1) this.products.splice(index, 1);
    return this.products;
  }
}
