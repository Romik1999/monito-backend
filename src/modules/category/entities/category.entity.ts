import {Column, Model, Table, HasOne} from "sequelize-typescript";
import {Product} from "../../products/entities/product.entity";

@Table
export class Category extends Model {
    @Column
    title: string
    @Column
    name: string
    @HasOne(() => Product, { foreignKey: 'categoryId' })
    product: Product;
}
