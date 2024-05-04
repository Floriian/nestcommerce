import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserModel } from './entities/User.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: UserModel) {}

  async findOneByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email });
  }
}
