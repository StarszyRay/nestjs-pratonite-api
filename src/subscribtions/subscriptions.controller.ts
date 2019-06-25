import { Body, Controller, Get, HttpCode, Param, Post} from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { CreateSubscriptionsDto } from './create-subscriptions.dto';

@Controller('subscriptions')
export class SubscriptionsController {

  constructor(private readonly subscriptionsService: SubscriptionsService) {
  }

  @Post('')
  @HttpCode(201)
  async addSubscription(@Body() createSubscriptionsDto: CreateSubscriptionsDto) {
    return await this.subscriptionsService.addSubscription(createSubscriptionsDto);
  }

  @Get(':patron')
  async getPatronsSubscriptions(@Param('patron') patron) {
    return await this.subscriptionsService.getSubscriptions(patron);
  }

}
