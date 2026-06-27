import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SignInUserDto } from './dto/signIn-user.dto';
import { JwtGuard } from 'src/common/guards/jwt.guard';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,    
  ) {}

  @UseGuards(JwtGuard)
  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.usersService.findOneById(+id);
  }
}
