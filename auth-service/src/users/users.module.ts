import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from './models/user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { GuardsModule } from 'src/common/guards/guards.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Users]),
    GuardsModule
  ],
  exports: [UsersService],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
