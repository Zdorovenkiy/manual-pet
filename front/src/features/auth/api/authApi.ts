
import { baseApi } from '@/shared/api';
import type { IAuthTokens, IAuthUserCreate, TAuthUserLogin } from '../model/authTypes';
import { authStorage } from '../model/authStorage';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // getUser: builder.query<IUser, {id: string}>({
    //   query: (body) => ({
    //     url: `auth/${body.id}`,
    //     method: 'GET',
    //   }),
    // }),

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

    signOut: builder.mutation<string, TAuthUserLogin>({
      query: (body) => ({
        url: `auth/sign-out`,
        method: 'POST',
        body
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        await queryFulfilled;
        authStorage.clear();
      },
    }),

  }),
});

export const { useSignUpMutation, useSignInMutation, useSignOutMutation } = authApi;