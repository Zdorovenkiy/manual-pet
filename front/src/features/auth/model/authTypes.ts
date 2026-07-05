export interface IAuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface IAuthUserCreate {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export type TAuthUserLogin = Pick<IAuthUserCreate, "email" | "password">

