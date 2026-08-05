import { createSelector, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import { authStorage } from "@/shared/model";
import type { RootState } from "@/app/store";


interface IAuthSlice {
  isAuth: boolean
}

const initialState: IAuthSlice = {
    isAuth: !!authStorage.getRefresh(),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
  }
});

export const authReducer = authSlice.reducer;
export const { setAuth } = authSlice.actions;

export const authSelector = createSelector(
  [(state: RootState) => state.auth],
  (auth) => auth.isAuth
);