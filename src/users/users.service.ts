import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { UserInterface } from './user.interface';
import { CreateUserDto } from './create-user.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<UserInterface>) {}

  async create(createUserDto: CreateUserDto): Promise<UserInterface> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findAll(): Promise<UserInterface[]> {
    return await this.userModel.find().exec();
  }

  async getUserById(userId): Promise<UserInterface> {
    return await this.userModel.findById(userId).exec();
  }

  async updateUser(userId, createUserDto: CreateUserDto): Promise<UserInterface> {
    const updatedUser = await this.userModel.findByIdAndUpdate(userId, createUserDto, { new: true });
    return updatedUser;
  }

  async deleteUser(userId): Promise<any> {
    const deletedUser = await this.userModel.findByIdAndRemove(userId);
    return deletedUser;
  }
}
