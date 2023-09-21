import {Column, HasOne, Model} from "sequelize-typescript";
import {Product} from "../../products/entities/product.entity";

export class Size extends Model{
    @Column
    slug: string
    @Column
    title: string
    @HasOne(() => Product, { foreignKey: 'genderId' })
    product: Product;
}
