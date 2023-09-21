import {BelongsTo, Column, ForeignKey, Model, Table} from "sequelize-typescript";
import {Category} from "../../category/entities/category.entity";

@Table
export class Product extends Model {
    @Column
    title: string
    @Column
    imageUrl: string
    @Column
    gender: string
    @Column
    color: string
    @Column
    size: string
    @ForeignKey(() => Category)
    @Column
    categoryId: number;
    @BelongsTo(() => Category)
    category: Category;
}
