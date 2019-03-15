import { Controller, Get, Post, Body, Param, NotFoundException, Put, Query, Delete, HttpStatus, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserInterface } from './user.interface';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('')
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<UserInterface[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<any> {
    const user = await this.usersService.getUserById(id);
    if (!user) { throw new NotFoundException('User has not been found!'); }
    return user;
  }

  @Put(':id')
  async updateUser(@Res() res, @Param('id') id: string, @Body() createUserDto: CreateUserDto) {
    const updatedUser = await this.usersService.updateUser(id, createUserDto);
    if (!updatedUser) {throw new NotFoundException('User does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'User updated successfully.',
      updatedUser,
    });
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<any> {
    const deletedUser = await this.usersService.deleteUser(id);
    if (!deletedUser) {throw new NotFoundException('User does not exist!'); }
    return deletedUser;
  }
}
