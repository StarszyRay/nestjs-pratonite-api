import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  Put,
  Query,
  Delete,
  HttpStatus,
  Res,
  HttpCode,
  UseInterceptors, UploadedFile,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserInterface } from './user.interface';
import { CreateUserDto } from './create-user.dto';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('users')
export class UsersController {

  SERVER_URL = 'http://localhost:3000/';

  constructor(private readonly usersService: UsersService) {}

  @Post('/changeAvatar')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads'
      , filename: (req, file, cb) => {
        // Generating a 32 random chars long string
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
        // Calling the callback passing the random name generated with the original extension name
        cb(null, `${randomName}${extname(file.originalname)}`);
      },
    }),
  }))
  async uploadAvatar(@Query('id') id, @UploadedFile() file) {
    return await this.usersService.setAvatar(id, `${this.SERVER_URL}${file.path}`);
  }

  @Post('')
  @HttpCode(201)
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
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

  @Put('')
  async updateUser(@Res() res, @Query('id') id: string, @Body() createUserDto: CreateUserDto) {
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
