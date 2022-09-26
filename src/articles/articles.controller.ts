import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  UseGuards,
  Request,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-articles.dto';
import { ArticlesService } from './articles.service';
import { Article } from 'src/schemas/article.schema';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@Controller('/articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() createArticleDto: CreateArticleDto,
    @Request() req,
  ): Promise<Article> {
    if (req.admin) {
      return await this.articlesService.create(
        createArticleDto,
        req.user.userId,
      );
    } else {
      throw new HttpException('Accès interdit', HttpStatus.FORBIDDEN);
    }
  }

  @Get()
  async findAll(): Promise<Article[]> {
    return await this.articlesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Article> {
    return await this.articlesService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    return await this.articlesService.update(id, updateArticleDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return await this.articlesService.delete(id);
  }
}
