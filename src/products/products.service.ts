import { Injectable } from '@nestjs/common';
import { Product } from './product.model';
@Injectable()
export class productsService {
  products: Product[] = [];
  saveProduct(product: Product) {
    this.products.push(product);
  }
}
