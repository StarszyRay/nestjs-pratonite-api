import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { UserInterface } from '../_interfaces/user.interface';
import { CreateUserDto } from './create-user.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<UserInterface>) {}

  async create(createUserDto: CreateUserDto) {
    const found = await this.userModel.findOne({uid: createUserDto.uid});
    if (found === null) {
      return await this.userModel.create(createUserDto);
    }
    return await this.userModel.replaceOne({uid: createUserDto.uid}, createUserDto);
  }

  async getUserByUid(userUid): Promise<UserInterface> {
    return await this.userModel.findOne({ uid: userUid} ).exec();
  }

  async findAll(): Promise<UserInterface[]> {
    return await this.userModel.find({});
  }

  async deleteUser(userId): Promise<any> {
    return await this.userModel.findByIdAndRemove(userId);
  }

  async getRecommended(): Promise<UserInterface[]> {

    return await this.userModel.find({role: 'creator'});
  }
}
