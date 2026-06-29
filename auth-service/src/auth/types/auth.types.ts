export interface IJwtPayload {
    sub: number;
    username: string;
}

export interface ISignTokens {
  accessToken: string,
  refreshToken: string
}