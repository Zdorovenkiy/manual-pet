import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtGuard } from 'src/common/guards/jwt.guard';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        global: true,
        secret: config.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: config.get<number>('JWT_TIME'),
        },
      }),
    })
  ],
  exports: [
    JwtGuard,
    JwtModule
  ],
  providers: [JwtGuard],
})
export class GuardsModule {}
