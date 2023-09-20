import {IsString} from "class-validator"

export class CreateProductInput {
    @IsString()
    title: string
    @IsString()
    imageUrl: string
    @IsString()
    gender: string
    @IsString()
    color: string
    @IsString()
    size: string
    @IsString()
    category: string
}
