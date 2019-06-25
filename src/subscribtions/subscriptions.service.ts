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
    let ret;
    let oldSubscriptionPrice = -1;
    if (found === null) {
      ret = await this.subscriptionsModel.create(createSubscriptionsDto);
    } else {
      oldSubscriptionPrice = found.step;
      ret = await this.subscriptionsModel.replaceOne(conditions, createSubscriptionsDto);
    }
    const stepsOfCreator: StepsInterface = await this.stepsModel.findOne( {creatorUid: createSubscriptionsDto.creatorUid});
    stepsOfCreator.steps.forEach( step => {
      if (createSubscriptionsDto.step === step.price) {
        step.patronsNum += 1;
      } else if (step.price === oldSubscriptionPrice && oldSubscriptionPrice !== -1) {
        step.patronsNum -= 1;
      }
    });
    return await this.stepsModel.replaceOne({creatorUid: stepsOfCreator.creatorUid}, stepsOfCreator);
  }

  async getSubscriptions(patron: string): Promise<any> {
    return this.subscriptionsModel.find({patronUid: patron});
  }
}
