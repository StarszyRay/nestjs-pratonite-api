import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StepsSchema } from '../steps/steps.schema';
import { SubscriptionsSchema } from './subscriptions.schema';
import { SubscriptionsController } from './subscriptions.controller';
import { SubscriptionsService } from './subscriptions.service';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Subscriptions', schema: SubscriptionsSchema },
    { name: 'Steps', schema: StepsSchema },
  ])],
  controllers: [SubscriptionsController],
  providers: [SubscriptionsService],
})
export class SubscriptionsModule {}
