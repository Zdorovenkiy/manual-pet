
import { baseApi } from '@/shared/api';
import type { IUsersResponse } from '../model/userTypes';
import { setUser } from '../model/userSlice';


export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getMe: builder.query<IUsersResponse, void>({
      query: () => ({
        url: `users/me`,
        method: 'GET',
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
      },
    }),
  }),
});

export const { useGetMeQuery } = userApi;
