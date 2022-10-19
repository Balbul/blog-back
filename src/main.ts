import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const startServer = async () => {
  const ENV = process.env;
  const app = await NestFactory.create(AppModule);
  await app.listen(ENV.API_PORT);
  console.log(
    `Listen on : ${ENV.PROTOCOL_HTTP}://${ENV.HOST}:${ENV.PORT_SERVER}`,
  );
  return app;
};

// TODO ajouter des tests
const closeServer = async (server: INestApplication) => {
  await server.close();
};
// ouverture du serveur
try {
  startServer();
} catch (e) {
  console.log('une erreur est survenue...');
  console.log(e);
}
