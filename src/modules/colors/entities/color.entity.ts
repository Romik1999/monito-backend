import {Column, HasOne, Model, Table} from "sequelize-typescript";
import {Product} from "../../products/entities/product.entity";
@Table
export class Color extends Model{
    @Column
    slug: string
    @Column
    title: string
    @HasOne(()=>Product, {foreignKey: 'colorId'})
    product: Product
}
