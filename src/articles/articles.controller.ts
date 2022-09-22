import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  Put,
  Delete,
} from '@nestjs/common';
import { Request } from 'express';
@Controller('/articles')
export class ArticlesController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'récupération de tous les articles';
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log('je suis le paramètre', params.id);
    return `Retourne l'article correspondant à l'id #${params.id}`;
  }

  @Post()
  create(@Body() createArticleDto): string {
    return "création d'un article";
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateArticleDto): string {
    return `Suppression de l'article ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `Suppression de l'article ${id}`;
  }
}
