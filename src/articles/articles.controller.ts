import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
} from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-articles.dto';
import { ArticlesService } from './articles.service';
import { Article } from 'src/schemas/article.schema';
@Controller('/articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @Post()
  async create(@Body() createArticleDto: CreateArticleDto): Promise<Article> {
    return this.articlesService.create(createArticleDto);
  }

  @Get()
  async findAll(): Promise<Article[]> {
    return this.articlesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Article> {
    return this.articlesService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    return this.articlesService.update(id, updateArticleDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.articlesService.delete(id);
  }
}
