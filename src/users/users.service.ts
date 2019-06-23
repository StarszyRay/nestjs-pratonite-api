import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { UserInterface } from './user.interface';
import { CreateUserDto } from './create-user.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<UserInterface>) {}

  async create(createUserDto: CreateUserDto) {
    const createUser = new this.userModel(createUserDto);
    await createUser.save();
  }

  async getUserById(userId): Promise<any> {
    return await this.userModel.findById(userId).exec();
  }

  async getUserByUid(userUid): Promise<UserInterface> {
    return await this.userModel.findOne({ uid: userUid} ).exec();
  }

  async findAll(): Promise<UserInterface[]> {
    return await this.userModel.find().exec();
  }

  async updateUser(userId, createUserDto: CreateUserDto): Promise<UserInterface> {
    const updatedUser = await this.userModel.findByIdAndUpdate(userId, createUserDto, { new: false });
    return updatedUser;
  }

  async deleteUser(userId): Promise<any> {
    const deletedUser = await this.userModel.findByIdAndRemove(userId);
    return deletedUser;
  }

  async setAvatar(uid, path) {
    return 'lets say i just set avatar here for now...';
  }
}
