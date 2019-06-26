import { Body, Controller, Get, HttpCode, HttpStatus, NotFoundException, Param, Post, Res } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { CreateSubscriptionsDto } from './create-subscriptions.dto';

@Controller('subscriptions')
export class SubscriptionsController {

  constructor(private readonly subscriptionsService: SubscriptionsService) {
  }

  @Post('')
  @HttpCode(201)
  async addSubscription(@Body() createSubscriptionsDto: CreateSubscriptionsDto, @Res() res) {
    const result = await this.subscriptionsService.addSubscription(createSubscriptionsDto);
    if (!result) {
      throw new NotFoundException('Creator of creatorUid does not exist!');
    }
    return res.status(HttpStatus.OK).json(result);
  }

  @Get(':patron')
  async getPatronsSubscriptions(@Param('patron') patron) {
    return await this.subscriptionsService.getSubscriptions(patron);
  }

}
