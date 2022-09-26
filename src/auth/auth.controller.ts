import { Body, Controller, Post } from '@nestjs/common';
import { ConnectUserDto } from 'src/user/dto/connect-user.dto';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async login(@Body() connectUserDto: ConnectUserDto) {
    return await this.authService.login(
      connectUserDto.email,
      connectUserDto.password,
    );
  }
}
