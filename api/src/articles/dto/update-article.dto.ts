import { IsEmail, IsString } from "class-validator"

export class UpdateArticleDto {
    @IsString()
    title: string

    @IsString()
    img: string

    @IsString()
    description: string

    @IsString()
    author: string

}