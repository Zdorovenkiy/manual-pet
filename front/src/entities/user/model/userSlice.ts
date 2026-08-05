import {  createSelector, createSlice } from "@reduxjs/toolkit";
import { UserEntity } from "./userEntity";
import type { RootState } from "@/app/store";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IUserSlice {
  email?: string;
}

const initialState: IUserSlice = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUserSlice>) {
      Object.assign(state, action.payload);
    },
    clearUser: (state) => {
      return {...initialState}
    },
  },
  extraReducers: (builder) => {
  }
});

export const userReducer = userSlice.reducer;
export const { setUser, clearUser } = userSlice.actions;

export const userSelector = createSelector(
  [(state: RootState) => state.user],
  (user) => new UserEntity(user),
);
