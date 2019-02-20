import { Get, Post, Body, Controller, UsePipes} from '@nestjs/common';
import { ItemsService } from './item.service';
import { Item } from './item.interface';
import { CreateItemDto } from './create-item.dto';
import { ItemsValidationPipe } from '../pipes/items.pipe';

@Controller('items')
export class ItemsController {

  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Post()
  @UsePipes(new ItemsValidationPipe())
  async create(@Body() item: Item) {
    return this.itemsService.create(item);
  }
}
