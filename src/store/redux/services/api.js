import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../../links';

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: () => ({}),
  tagTypes: ['User', 'Product', 'auth'],
});

//api.enhanceEndpoints({ addTagTypes: ['User', 'auth'] });
