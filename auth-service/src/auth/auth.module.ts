import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { ConfigService } from '@nestjs/config';
import { GuardsModule } from 'src/common/guards/guards.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { RefreshTokens } from './models/refreshTokens.model';
@Module({
  imports: [
    SequelizeModule.forFeature([RefreshTokens]),
    UsersModule,
    GuardsModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
