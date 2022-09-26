import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesModule } from './articles/articles.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

const ENV = process.env;
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: `mongodb://${ENV.MONGO_USER}:${ENV.MONGO_PWD}@${ENV.MONGO_HOST}`,
      }),
    }),
    ArticlesModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
