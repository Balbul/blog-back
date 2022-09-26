import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class ConnectUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
