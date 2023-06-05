import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './entity/articles.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(Article)
        private articleRepository: Repository<Article>,
      ) {}
    // getUsers(): Promise<Article[]> {
    //     return this.usersRepository.find();
    // }
    // getSingleUser(id: number): Promise<Article | null> {
    //     return this.usersRepository.findOneBy({ id });
    // }
    // postUser(createUserDto: CreateArticleDto) {
    //     return this.usersRepository.save(createUserDto);
    // }
    // async deleteUser(id: {id: number}) {
    //     await this.usersRepository.delete(id);
    // }
    // editUser(updateUserDto: UpdateArticleDto, param: {id: number}) {
    //     // return {body: updateUserDto, param};
    //     this.usersRepository.update(updateUserDto, param);
    // }

    getArticles() {
        return this.articleRepository.find()
    }

    getArticle(id: number) {
        return this.articleRepository.findOneBy({id})
    }

    postArticle(createArticleDto: CreateArticleDto) {
        return this.articleRepository.save(createArticleDto)
    }

    UpdateArticle(id: number, updateArticleDto: UpdateArticleDto) {
        return this.articleRepository.update(id, updateArticleDto)
    }

    DeleteArticle(id: number) {
        return this.articleRepository.delete(id)
    }
}
