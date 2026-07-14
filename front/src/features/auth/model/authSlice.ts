import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";


interface IAuthSlice {
  isAuth: boolean
}

const initialState: IAuthSlice = {
    isAuth: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // getAccess: () => {
    //   localStorage.getItem(ACCESS_TOKEN_KEY)
    // },
    // getRefresh: () => {
    //   localStorage.getItem(REFRESH_TOKEN_KEY)
    // },
    // setTokens: () => {
    //   localStorage.setItem(ACCESS_TOKEN_KEY, access);
    //   localStorage.setItem(REFRESH_TOKEN_KEY, refresh);
    // },
    // clearTokens: () => {
    //   localStorage.removeItem(ACCESS_TOKEN_KEY);
    //   localStorage.removeItem(REFRESH_TOKEN_KEY);
    // },
  },
  extraReducers: (builder) => {
    // builder.addMatcher(authApi.endpoints.signIn.matchFulfilled, 
    //   (state, action) => {

    //   }
    // ),
  }
});