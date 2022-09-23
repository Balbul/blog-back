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

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const articleACreer = JSON.parse(JSON.stringify(createArticleDto));
    articleACreer.dateCreation = new Date().toISOString();
    const nouvelArticle = new this.ArticleModel(articleACreer);
    return nouvelArticle.save();
  }

  async findAll(): Promise<Article[]> {
    return this.ArticleModel.find().exec();
  }

  async findOne(id: string): Promise<Article> {
    return this.ArticleModel.findById(id);
  }

  async update(
    id: string,
    updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    const articleAModifier = JSON.parse(JSON.stringify(updateArticleDto));
    articleAModifier.dateModification = new Date().toISOString();
    return this.ArticleModel.findByIdAndUpdate(id, articleAModifier);
  }

  async delete(id: string): Promise<any> {
    return this.ArticleModel.deleteOne({ id: id });
  }
}
