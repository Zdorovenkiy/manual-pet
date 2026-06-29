
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { ACCESS_JWT } from './providers/access.provider';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(
    @Inject(ACCESS_JWT)
    private readonly accessJwt: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.accessJwt.verifyAsync(token);
      request['user'] = payload;
    } catch (e) {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
