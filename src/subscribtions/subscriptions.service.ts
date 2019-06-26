import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubscriptionsInterface } from '../_interfaces/subscriptions.interface';
import { CreateSubscriptionsDto } from './create-subscriptions.dto';
import { StepsInterface } from '../_interfaces/steps.interface';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectModel('Subscriptions') private readonly subscriptionsModel: Model<SubscriptionsInterface>,
    @InjectModel('Steps') private readonly stepsModel: Model<StepsInterface>,
  ) {}

  async addSubscription(createSubscriptionsDto: CreateSubscriptionsDto) {
    const conditions = {
      creatorUid: createSubscriptionsDto.creatorUid,
      patronUid: createSubscriptionsDto.patronUid,
    };
    const found = await this.subscriptionsModel.findOne(conditions);
    const stepsOfCreator: StepsInterface = await this.stepsModel.findOne( {creatorUid: createSubscriptionsDto.creatorUid});
    let oldSubscriptionPrice = -1;
    let replaced = null;
    if (stepsOfCreator != null) {
      if (found === null) {
        replaced = await this.subscriptionsModel.create(createSubscriptionsDto);
      } else {
        oldSubscriptionPrice = found.step;
        replaced = await this.subscriptionsModel.replaceOne(conditions, createSubscriptionsDto);
      }
      stepsOfCreator.steps.forEach( step => {
        if (createSubscriptionsDto.step === step.price) {
          step.patronsNum += 1;
        }
        if (step.price === oldSubscriptionPrice && oldSubscriptionPrice !== -1) {
          step.patronsNum -= 1;
        }
      });
      await this.stepsModel.replaceOne({creatorUid: stepsOfCreator.creatorUid}, stepsOfCreator);
    }
    return replaced;
  }

  async getSubscriptions(patron: string): Promise<any> {
    return this.subscriptionsModel.find({patronUid: patron});
  }

}
