import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema()
export class Article {
  @Prop({ required: true })
  titre: string;

  @Prop({ required: true })
  contenu: string;

  @Prop({ required: false })
  cheminImages: string[];

  @Prop({ default: new Date().toISOString() })
  dateCreation: string;

  @Prop({ default: null })
  dateModification: string;

  @Prop({ required: false, default: true })
  estAffiche: boolean;

  @Prop({ required: true })
  redacteur: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
