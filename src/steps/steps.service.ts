import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StepsInterface } from '../_interfaces/steps.interface';
import { CreateStepsDto } from './create-steps.dto';

@Injectable()
export class StepsService {
  constructor(
    @InjectModel('Steps') private readonly stepsModel: Model<StepsInterface>,
  ) {}

  async addSteps(createStepsDto: CreateStepsDto) {
    const found = await this.stepsModel.findOne({creatorUid: createStepsDto.creatorUid});
    if (found === null) {
      return await this.stepsModel.create(createStepsDto);
    }
    return await this.stepsModel.replaceOne({creatorUid: createStepsDto.creatorUid}, createStepsDto);
  }

  async getCreatorsSteps(id: string): Promise<StepsInterface> {
    return await this.stepsModel.findOne({creatorUid: id});
  }
}
