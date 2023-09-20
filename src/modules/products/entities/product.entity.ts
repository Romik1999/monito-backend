import {Column, Model, Table} from "sequelize-typescript";

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
    @Column
    category: string
}
