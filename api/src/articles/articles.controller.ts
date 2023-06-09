import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Request } from 'express';

@Controller('articles')
export class ArticlesController {
    constructor(private articlesService: ArticlesService){};

    @Get()
    getArticles(@Req() req: Request) {
        return this.articlesService.getArticles();
    }

    @Get("/:id")
    getArticle(@Req() req: Request, @Param('id', ParseIntPipe) id: number) {
        return this.articlesService.getArticle(id);
    }

    @Post()
    PostArticle(@Body() createArticleDto: CreateArticleDto) {
        return this.articlesService.postArticle(createArticleDto);
    }

    @Patch('/:id')
    UpdateArticle(@Body() updateArticleDto: UpdateArticleDto, @Param('id', ParseIntPipe) id: number) {
        return this.articlesService.UpdateArticle(id, updateArticleDto);
    }
    @Delete('/:id')
    DeleteArticle(@Param('id', ParseIntPipe) id: number) {
        return this.articlesService.DeleteArticle(id);
    }

}
