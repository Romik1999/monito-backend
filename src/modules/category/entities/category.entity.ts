import {Column, Model, Table, HasOne} from "sequelize-typescript";
import {Product} from "../../products/entities/product.entity";

@Table
export class Category extends Model {
    @Column
    slug: string
    @Column
    title: string
    @HasOne(() => Product, { foreignKey: 'categoryId' })
    product: Product;
}
