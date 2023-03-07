import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // inicializadora do back-end
  const app = await NestFactory.create(AppModule);
  // criando uma instancia do nest, passando um parametro da cofiguraçao do appModule
  await app.listen(3000);
}
bootstrap();
