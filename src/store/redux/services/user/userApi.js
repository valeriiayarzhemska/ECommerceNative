import { links } from '../../../../links';
import { api } from '../api';

export const userApi = api.injectEndpoints({
  endpoints: build => ({
    login: build.mutation({
      query: credentials => ({
        url: links.login,
        method: 'POST',
        body: credentials,
      }),
    }),
    getUsers: build.query({
      query: () => ({ url: links.getUsers }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'User', id })),
        { type: 'User', id: 'LIST' },
      ],
    }),
    getUser: build.query({
      query: id => links.getUser,
      providesTags: (_post, _err, id) => [{ type: 'User', id }],
    }),
  }),
});

export const { useLoginMutation, useGetUsersQuery, useGetUserQuery } = userApi;
