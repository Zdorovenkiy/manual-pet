import { authStorage } from '@/features/auth';
import { fetchBaseQuery, type BaseQueryFn, type FetchArgs, type FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers) => {
    const token = authStorage.getAccess();

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});
