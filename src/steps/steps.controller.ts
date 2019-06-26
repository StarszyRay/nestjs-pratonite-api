import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { StepsService } from './steps.service';
import { CreateStepsDto } from './create-steps.dto';

@Controller('steps')
export class StepsController {

  SERVER_URL = 'http://localhost:3000';

    constructor(private readonly stepService: StepsService) {
    }

  @Post('')
  @HttpCode(201)
  async addStep(@Body() createStepsDto: CreateStepsDto) {
    return await this.stepService.addSteps(createStepsDto);
  }

  @Get(':uid')
  async getCreatorsSteps(@Param('uid') uid) {
    const found = await this.stepService.getCreatorsSteps(uid);
    if (!found) {
      return [];
    }
    return found;
  }
}
