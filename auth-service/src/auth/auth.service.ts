import { ConflictException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UniqueConstraintError } from 'sequelize';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService
  ) {}

  async signIn(email: string, password: string): Promise<{accessToken: string}> {
    const user = await this.usersService.findOneByEmail(email);    
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.firstName };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(createUserDto: CreateUserDto): Promise<any> {
    try {
      const user = await this.usersService.create(createUserDto);
      const payload = { sub: user.id, username: user.firstName };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      if (error instanceof UniqueConstraintError) {
        throw new ConflictException('Email уже используется');
      }
      throw error; 
    }
  }
}
