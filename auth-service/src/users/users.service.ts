import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users)
    private usersModel: typeof Users,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.usersModel.create(createUserDto);
    return user;
  }

  async findOneById(id: number) {
    const user = await this.usersModel.findByPk(id);
    if (!user) {
      throw new HttpException("Пользователь не найден", HttpStatus.BAD_REQUEST);
    } 

    return user;
  }

  async findOneByEmail(email: string) {
    const user = await this.usersModel.findOne({
      where: {
        email
      }
    });
    if (!user) {
      throw new HttpException("Пользователь не найден", HttpStatus.BAD_REQUEST);
    } 

    return user;
  }
}
