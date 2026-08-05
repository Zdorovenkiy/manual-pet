
import { baseApi } from '@/shared/api';
import type { IAuthTokens, IAuthUserCreate, TAuthUserLogin } from '../model/authTypes';
import { authStorage } from '@/shared/model';
import { clearUser } from '@/entities/user';
import { setAuth } from '../model/authSlice';


export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<IAuthTokens, IAuthUserCreate>({
      query: (body) => ({
        url: `auth/sign-up`,
        method: 'POST',
        body
      }),
      async onQueryStarted(_, { queryFulfilled }) {
          const { data } = await queryFulfilled;
          authStorage.setTokens(data.accessToken, data.refreshToken);
      },
    }),

    signIn: builder.mutation<IAuthTokens, TAuthUserLogin>({
      query: (body) => ({
        url: `auth/sign-in`,
        method: 'POST',
        body
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        const { data } = await queryFulfilled;
        authStorage.setTokens(data.accessToken, data.refreshToken);
      },
    }),

    signOut: builder.mutation<string, Pick<TAuthUserLogin, "email">>({
      query: (body) => ({
        url: `auth/sign-out`,
        method: 'POST',
        body,
        responseHandler: 'text',
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          authStorage.clear();
          dispatch(clearUser());
          dispatch(setAuth(false));
        } catch(e) {
          console.error(e)
        }
      },
    }),

    refresh: builder.mutation<IAuthTokens, Pick<IAuthTokens, "refreshToken">>({
      query: (body) => ({
        url: `auth/refresh`,
        method: 'POST',
        body
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        const { data } = await queryFulfilled;
        authStorage.setTokens(data.accessToken, data.refreshToken);
      },
    }),

  }),
});

export const { useSignUpMutation, useSignInMutation, useSignOutMutation, useRefreshMutation } = authApi;