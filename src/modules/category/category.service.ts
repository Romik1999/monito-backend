import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import {InjectModel} from "@nestjs/sequelize";
import {Category} from "./entities/category.entity";

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private readonly categoryRepository: typeof Category) {}
  create(createCategoryDto: CreateCategoryDto) {
    return 'This action adds a new category';
  }

  findAll() {
    // return `This action returns all category`;
    return this.categoryRepository.findAll()
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
