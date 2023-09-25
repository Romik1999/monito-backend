import {Injectable} from '@nestjs/common';
import {CreateProductInput} from './dto/create-product.input';
import {UpdateProductInput} from './dto/update-product.input';
import {products} from "../../moks";
import {InjectModel} from "@nestjs/sequelize";
import {Product} from "./entities/product.entity";
import {Category} from "../category/entities/category.entity";
import {Color} from "../colors/entities/color.entity";
import {Gender} from "../genders/entities/gender.entity";

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product) private readonly productRepository: typeof Product) {
    }

    create(createProductInput: CreateProductInput) {
        return 'This action adds a new product';
    }

    findAll() {
        return this.productRepository.findAll({
            include: [
                {
                    model: Category,
                    attributes: ['slug', 'title'],
                    required: false
                },
                {
                    model: Color,
                    attributes: ['slug', 'title'],
                    required: false
                },
                {
                    model: Gender,
                    attributes: ['slug', 'title'],
                    required: false
                },
            ],
        })
    }

    getProducts() {
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
