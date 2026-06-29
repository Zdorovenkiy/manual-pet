import { RefreshTokens } from 'src/auth/models/refreshTokens.model';
import { Users } from '../users/models/user.model';

export const DATABASE_MODELS = [
  Users,
  RefreshTokens,
] as const;