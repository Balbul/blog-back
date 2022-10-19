import { Controller, Post, Body, Patch, Delete, Get } from '@nestjs/common';
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

  // @Patch(':userId')
  // // modification des informations d'un utilisateur

  // @Delete(':userId')
  // // suppression d'un utilisateur

  // @Get()
  // // obtenir les informations de tous les utilisateurs pour l'admin

  // @Patch()
  // modification du role admin d'un utilisateur par l'admin
}
