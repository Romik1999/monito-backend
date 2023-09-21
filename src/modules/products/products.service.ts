import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import {products} from "../../moks";
import {InjectModel} from "@nestjs/sequelize";
import {Product} from "./entities/product.entity";

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product) private readonly productRepository: typeof Product) {}
  create(createProductInput: CreateProductInput) {
    return 'This action adds a new product';
  }

  findAll() {
    return this.productRepository.findAll()
  }

  getProducts(){
    return products
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
