import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  Query,
  Delete,
  HttpStatus,
  Res,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserInterface } from '../_interfaces/user.interface';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {

  SERVER_URL = 'http://localhost:3000/';

  constructor(private readonly usersService: UsersService) {}

  @Post('')
  @HttpCode(201)
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('')
  async findAll(): Promise<UserInterface[]> {
    return this.usersService.findAll();
  }

  @Get('/byUid')
  async getUserByUid(@Res() res, @Query('uid') uid): Promise<UserInterface> {
    const user = await this.usersService.getUserByUid(uid);
    return res.status(HttpStatus.OK).json(user);
  }

  @Get('/creators')
  async getRecommended() {
    return await this.usersService.getRecommended();
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<any> {
    const deletedUser = await this.usersService.deleteUser(id);
    if (!deletedUser) {throw new NotFoundException('User does not exist!'); }
    return deletedUser;
  }
}
