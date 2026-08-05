
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { authStorage } from '../model';

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
