import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { mongo } from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  mongo.connect(
    'mongodb+srv://admin:<PASSWORD>@pratonitedb-hqshf.mongodb.net/test?retryWrites=true',
    {useNewUrlParser: true}
  );
}
bootstrap();
