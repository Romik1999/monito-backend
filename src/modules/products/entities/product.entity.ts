import {Column, HasMany, Model, Table} from "sequelize-typescript";
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
    @HasMany(()=>Category, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    category: Category[]
}
