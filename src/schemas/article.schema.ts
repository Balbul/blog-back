import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/schemas/user.schema';

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

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  redacteur: User;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
