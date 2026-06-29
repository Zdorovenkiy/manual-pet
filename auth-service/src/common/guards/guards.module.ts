import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtGuard } from 'src/common/guards/jwt.guard';
import { ACCESS_JWT, AccessJwtProvider } from './providers/access.provider';
import { REFRESH_JWT, RefreshJwtProvider } from './providers/refresh.provider';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        global: true,
      }),
    })
  ],
  exports: [
    JwtGuard,
    JwtModule,
    ACCESS_JWT,
    REFRESH_JWT,
  ],
  providers: [
    JwtGuard,
    AccessJwtProvider,
    RefreshJwtProvider,
  ],
})
export class GuardsModule {}
