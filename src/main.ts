import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.API_PORT);
  console.log(`en écoute sur: http://localhost:${process.env.API_PORT}`);
}
try {
  bootstrap();
} catch (e) {
  console.log('une erreur est survenue...');
  console.log(e);
}
