import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsBoolean,
  IsMongoId,
} from 'class-validator';

export class UpdateArticleDto {
  @IsString()
  @IsNotEmpty()
  titre: string;

  @IsString()
  @IsNotEmpty()
  contenu: string;

  @IsArray()
  @IsString({ each: true })
  cheminImages: string[];

  @IsBoolean()
  @IsNotEmpty()
  estAffiche: boolean;

  @IsMongoId()
  @IsNotEmpty()
  redacteur: string;
}
