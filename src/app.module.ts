import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { FileModule } from './file/file.module';

// MongooseModule.forRoot() might have to get changed address depending on docker's mongoDB container's ip, use:
// 'doker inspect <container>' to look up container's ip and then 'mongo <conteiner_ip>' to get full address of mongodb running inside
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://172.18.0.2:27017/pratonite?gssapiServiceName=mongodb', {useNewUrlParser: true }),
    UsersModule,
    FileModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {}
