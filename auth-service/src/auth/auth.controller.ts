import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { SignInUserDto } from 'src/users/dto/signIn-user.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/sign-in")
  signIn(@Body() signInUserDto: SignInUserDto) {
    return this.authService.signIn(signInUserDto.email, signInUserDto.password);
  }

  @Post("/sign-up")
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }
}
