import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

export const ACCESS_JWT = 'ACCESS_JWT';

export const AccessJwtProvider = {
  provide: "ACCESS_JWT",
  inject: [ConfigService],
  useFactory: (config: ConfigService) =>
    new JwtService({
      secret: config.getOrThrow('JWT_ACCESS_SECRET'),
      signOptions: {
        expiresIn: config.getOrThrow('JWT_ACCESS_TIME'),
      },
    }),
};