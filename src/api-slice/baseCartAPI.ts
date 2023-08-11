import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CartDataResponse, ICart, InputCart, resCart } from '../common/cart';

export const cartApi = createApi({
   reducerPath: 'cartApi',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://freshmart-tkt6.onrender.com/api/' }),
   endpoints: (builder) => ({
      getCart: builder.query<CartDataResponse, string>({
         query: (idUser) => `cart/${idUser}`,
         providesTags: (result, error) => {
            if (result?.cart?.products) {
               const finalTags = result?.cart?.products?.map((product) => ({
                  type: 'Cart' as const,
                  id: product.productId._id
               }));
               return [...finalTags, { type: 'Cart', id: 'LIST' }];
            }
            return [{ type: 'Cart', id: 'LIST' }];
         }
      }),
      postCart: builder.mutation<CartDataResponse, InputCart>({
         query: ({ ...body }) => ({
            url: `cart`,
            method: 'POST',
            body
         }),
         invalidatesTags: (result) => [{ type: 'Cart', id: 'LIST' }]
      }),
      updateCart: builder.mutation<CartDataResponse, InputCart>({
         query: ({ ...body }) => ({
            url: 'cart',
            method: 'PATCH',
            body
         }),
         invalidatesTags: (result) => [{ type: 'Cart', id: 'LIST' }]
      }),
      removeProductInCart: builder.mutation<ICart[], { userId: string; productId: string }>({
         query: ({ userId, productId }) => ({
            url: `cart/${productId}`,
            method: 'POST',
            body: { userId }
         }),
         invalidatesTags: (result, error, arg) => [{ type: 'Cart', id: 'LIST' }]
      })
   })
});

export const { useGetCartQuery, usePostCartMutation, useUpdateCartMutation, useRemoveProductInCartMutation } = cartApi;
