import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Article, ArticleDocument } from 'src/schemas/article.schema';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-articles.dto';
@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private ArticleModel: Model<ArticleDocument>,
  ) {}

  async create(
    createArticleDto: CreateArticleDto,
    userId: string,
  ): Promise<Article> {
    const articleACreer = JSON.parse(JSON.stringify(createArticleDto));
    articleACreer.dateCreation = new Date().toISOString();
    articleACreer.redacteur = userId;
    const nouvelArticle = new this.ArticleModel(articleACreer);
    return await nouvelArticle.save();
  }

  async findAll(): Promise<Article[]> {
    return await this.ArticleModel.find().exec();
  }

  async findOne(id: string): Promise<Article> {
    return await this.ArticleModel.findById(id);
  }

  async update(
    id: string,
    updateArticleDto: UpdateArticleDto,
    userId: string,
  ): Promise<Article> {
    const articleAModifier = JSON.parse(JSON.stringify(updateArticleDto));
    articleAModifier.dateModification = new Date().toISOString();
    articleAModifier.redacteur = userId;
    return await this.ArticleModel.findByIdAndUpdate(id, articleAModifier);
  }

  async delete(id: string): Promise<any> {
    return await this.ArticleModel.deleteOne({ id: id });
  }
}
