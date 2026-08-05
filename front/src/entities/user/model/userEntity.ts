import type { IUserSlice } from "./userSlice";

export class UserEntity {
  private readonly user: IUserSlice;

  constructor(user: IUserSlice) {
     this.user = user;
  }
  
  public get email() {
    return this.user.email;
  }
}