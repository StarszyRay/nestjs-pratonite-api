import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StepsSchema } from './steps.schema';
import { StepsController } from './steps.controller';
import { StepsService } from './steps.service';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Steps', schema: StepsSchema },
  ])],
  controllers: [StepsController],
  providers: [StepsService],
})
export class StepsModule {}
