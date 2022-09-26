import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  _id: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: new Date().toISOString() })
  dateCreation: string;

  @Prop({ required: false })
  dateDerniereConnection: string;

  @Prop({ required: true, default: true })
  estAdmin: boolean;

  @Prop({ required: false })
  pseudo: string;

  @Prop({ required: false })
  nom: string;

  @Prop({ required: false })
  prenom: string;

  @Prop({ required: false })
  adressePostale: string;

  @Prop({ required: false })
  numeroTelephone: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
