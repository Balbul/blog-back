import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { ConnectUserDto } from './dto/connect-user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async createUser(connectUserDto: ConnectUserDto): Promise<User> {
    const email = JSON.parse(JSON.stringify(connectUserDto)).email;
    const saltOrRounds = 10;
    const password = JSON.parse(JSON.stringify(connectUserDto)).password;
    const hashPwd = await hash(password, saltOrRounds);
    const newUser = new this.UserModel({
      email: email,
      password: hashPwd,
    });
    return newUser.save();
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.UserModel.findOne(
      { email: email },
      'id email password estAdmin',
    ).exec();
  }

  // const isMatch = await bcrypt.compare(password, hash);
}
