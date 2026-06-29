import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";

export const REFRESH_JWT = 'REFRESH_JWT';

export const RefreshJwtProvider = {
  provide: "REFRESH_JWT",
  inject: [ConfigService],
  useFactory: (config: ConfigService) =>
    new JwtService({
      secret: config.getOrThrow('JWT_REFRESH_SECRET'),
      signOptions: {
        expiresIn: config.getOrThrow('JWT_REFRESH_TIME'),
      },
    }),
};