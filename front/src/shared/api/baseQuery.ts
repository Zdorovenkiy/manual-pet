import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { tokenStorage } from '../lib';

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers) => {
    const token = tokenStorage.getAccess();

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});