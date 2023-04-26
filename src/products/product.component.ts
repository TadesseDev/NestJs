import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { productsService } from './products.service';
import { Product } from './product.model';
@Controller('products')
export class ProductsController {
  constructor(private ps: productsService) {}
  @Get(':id')
  findAll(@Param('id') id: String) {
    return this.ps.products.find((p) => p.id === Number(id));
  }
  @Post()
  saveProduct(
    @Body('title') title: String,
    @Body('description') description: String,
    @Body('price') price: Number,
  ) {
    const product = new Product(Date.now(), title, description, price, '');
    this.ps.saveProduct(product);
    return { message: 'Product created successfully', id: product.id };
  }
  @Get()
  getAllProducts() {
    return this.ps.products;
    }
    @Delete(':id')
    deleteProduct(@Param("id") id: String) {
        this.ps.products = this.ps.products.filter((p) => p.id !== Number(id));
        return { message: "Product deleted successfully" };
    }
}
