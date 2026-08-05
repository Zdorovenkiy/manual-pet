import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SignInUserDto } from './dto/signIn-user.dto';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { CurrentUser } from 'src/common/decorators/currentUser';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,    
  ) {}

  @UseGuards(JwtGuard)
  @Get("me")
  getUser(@CurrentUser() user: { sub: number }) {
    return this.usersService.findOneById(user.sub);
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.findOneById(+id);
  }

  // @UseGuards(JwtGuard)
  // @Get()
  // getUserByEmail(@Param('email') email: string) {
  //   return this.usersService.findOneByEmail(email);
  // }
}
