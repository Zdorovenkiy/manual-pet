import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInUserDto } from 'src/users/dto/signIn-user.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { SignOutUserDto } from 'src/users/dto/signOut-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/sign-in")
  signIn(@Body() signInUserDto: SignInUserDto) {
    return this.authService.signIn(signInUserDto.email, signInUserDto.password);
  }

  @Post("/sign-up")
  signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @UseGuards(JwtGuard)
  @Post("/sign-out")
  signOut(@Body() signOutUserDto: SignOutUserDto) {
    return this.authService.signOut(signOutUserDto.email);
  }

  @Post("/refresh")
  refresh(@Body("refreshToken") refreshToken: string) {
    return this.authService.refresh(refreshToken);
  }
}
