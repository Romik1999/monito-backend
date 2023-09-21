import {Column, ForeignKey, Model, Table} from "sequelize-typescript";
import {Product} from "../../products/entities/product.entity";

@Table
export class Category extends Model {
    @Column
    title: string
    @Column
    name: string
    @ForeignKey(() => Product)
    product: Product
}
