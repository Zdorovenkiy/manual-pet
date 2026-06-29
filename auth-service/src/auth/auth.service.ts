import { ConflictException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService, TokenExpiredError } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UniqueConstraintError } from 'sequelize';
import { ConfigService } from '@nestjs/config';
import { IJwtPayload, ISignTokens } from './types/auth.types';
import { RefreshTokens } from './models/refreshTokens.model';
import * as bcrypt from 'bcrypt';
import ms from 'ms';
import { InjectModel } from '@nestjs/sequelize';
import { ACCESS_JWT } from 'src/common/guards/providers/access.provider';
import { REFRESH_JWT } from 'src/common/guards/providers/refresh.provider';
@Injectable()
export class AuthService {
  constructor(
    @Inject(ACCESS_JWT)
    private readonly accessJwt: JwtService,

    @Inject(REFRESH_JWT)
    private readonly refreshJwt: JwtService,

    private usersService: UsersService,
    private config: ConfigService,

    @InjectModel(RefreshTokens)
    private refreshTokensModel: typeof RefreshTokens
  ) {}

  async creatingJwtTokens(payload: IJwtPayload) {
    const accessToken = await this.accessJwt.signAsync(payload);
    const refreshToken = await this.refreshJwt.signAsync(payload);
    const addedTime = ms(this.config.get<ms.StringValue>('JWT_REFRESH_TIME') ?? "30d");
    const expiresAt = new Date(Date.now() + addedTime);
    
    await this.refreshTokensModel.create({
      userId: payload.sub,
      tokenHash: await bcrypt.hash(refreshToken, 10),
      expiresAt
    })

    return {
      accessToken,
      refreshToken
    };
  }

  async refresh(refreshToken: string): Promise<Pick<ISignTokens, "accessToken">> {
    try {      
      const { exp, iat, ...payload } = await this.refreshJwt.verifyAsync(refreshToken);
      const refresh = await this.refreshTokensModel.findOne({
        where: {
          userId: payload.sub
        }
      })
      if (!refresh) {
        throw new UnauthorizedException('Токен истек');
      }

      const isCompare = await bcrypt.compare(refreshToken, refresh.tokenHash);

      if (!isCompare) {
        throw new UnauthorizedException('Токен неверный');
      }
      
      return {
        accessToken: await this.accessJwt.signAsync(payload)
      };
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        throw new UnauthorizedException('Токен истек');
      }
      throw error; 
    }
  }

  async signIn(email: string, password: string): Promise<ISignTokens> {
    const user = await this.usersService.findOneByEmail(email);    
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.firstName };

    await this.refreshTokensModel.destroy({
      where: {
        userId: payload.sub,
      }
    })

    return await this.creatingJwtTokens(payload);
  }

  async signUp(createUserDto: CreateUserDto): Promise<ISignTokens> {
    try {
      const user = await this.usersService.create(createUserDto);
      const payload = { sub: user.id, username: user.firstName };

      return await this.creatingJwtTokens(payload);
    } catch (error) {
      if (error instanceof UniqueConstraintError) {
        throw new ConflictException('Email уже используется');
      }
      throw error; 
    }
  }

  
  async signOut(email: string): Promise<string> {
    const user = await this.usersService.findOneByEmail(email);    

    await this.refreshTokensModel.destroy({
      where: {
        userId: user.id,
      }
    });

    return "Success";
  }
}
