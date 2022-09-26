import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const ENV = process.env;
  const app = await NestFactory.create(AppModule);
  await app.listen(ENV.API_PORT);
  console.log(`Listen on : http://${ENV.API_HOST}:${ENV.API_PORT}`);
}
// ouverture du serveur
try {
  bootstrap();
} catch (e) {
  console.log('une erreur est survenue...');
  console.log(e);
}
