import { links } from '../../../../links';
import { api } from '../api';

export const productsApi = api.injectEndpoints({
  endpoints: build => ({
    getProducts: build.query({
      query: () => ({ url: links.getProducts }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Product', id })),
        { type: 'Product', id: 'LIST' },
      ],
    }),
    getProduct: build.query({
      query: id => `${links.getProduct}${id}`,
      providesTags: (_post, _err, id) => [{ type: 'Product', id }],
    }),
    getUserCart: build.query({
      query: id => `${links.getUserCart}${id}`,
      providesTags: (_cart, _err, id) => [{ type: 'Product', id }],
    }),
  }),
  overrideExisting: true,
});

export const { useGetProductsQuery, useGetProductQuery, useGetUserCartQuery } =
  productsApi;
