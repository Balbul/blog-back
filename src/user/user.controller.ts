import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { ConnectUserDto } from './dto/connect-user.dto';
import { User } from 'src/schemas/user.schema';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() connectUserDto: ConnectUserDto): Promise<User> {
    return await this.userService.createUser(connectUserDto);
  }
}
