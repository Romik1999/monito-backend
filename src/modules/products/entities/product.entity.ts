import {BelongsTo, Column, ForeignKey, Model, Table} from "sequelize-typescript";
import {Category} from "../../category/entities/category.entity";
import {Color} from "../../colors/entities/color.entity";
import {Gender} from "../../genders/entities/gender.entity";

@Table
export class Product extends Model {
    @Column
    slug: string
    @Column
    title: string
    @Column
    imageUrl: string
    @ForeignKey(() => Gender)
    @Column
    genderId: number
    @BelongsTo(() => Gender)
    gender: Gender;
    @ForeignKey(() => Color)
    @Column
    colorId: number;
    @BelongsTo(() => Color)
    color: Color;
    @Column
    size: string
    @ForeignKey(() => Category)
    @Column
    categoryId: number;
    @BelongsTo(() => Category)
    category: Category;
}
