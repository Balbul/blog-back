import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, pass: string) {
    const user = await this.userService.findOne(email);
    const isMatch = await compare(pass, user.password);
    const payload = { id: user._id, admin: user.estAdmin };
    if (isMatch) {
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    return null;
  }
}
