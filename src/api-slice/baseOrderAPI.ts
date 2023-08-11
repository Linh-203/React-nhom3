import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IOrders } from '../common/orders';

export const orderAPI = createApi({
   reducerPath: 'orderAPI',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://freshmart-tkt6.onrender.com/api/' }),
   endpoints: (builder) => ({
      getOrderUser: builder.query<IOrders, string>({
         query: (idUser) => `orderUser/${idUser}`,
         providesTags: (result, error) => {
            if (result?.order) {
               const finalTags = result?.order?.map((item: any) => ({
                  type: 'Orders' as const
               }));
               return [...finalTags!, { type: 'Orders', id: 'LIST' }];
            }
            return [{ type: 'Orders', id: 'LIST' }];
         }
      }),
      postOrder: builder.mutation<IOrders, {}>({
         query: ({ ...body }) => ({
            url: `order`,
            method: 'POST',
            body
         }),
         invalidatesTags: (result) => [{ type: 'Orders', id: 'LIST' }]
      }),
      filterOrder: builder.mutation<IOrders, {}>({
         query: ({ idUser, status }) => ({
            url: `orderFilter/${idUser}`,
            method: 'POST',
            body: { status }
         })
      }),
      getOrdersAdmin: builder.query<IOrders, string>({
         query: () => `order-admin/`,
         providesTags: (result, error) => {
            if (result?.order) {
               const finalTags = result?.order?.map((item: any) => ({
                  type: 'Orders' as const
               }));
               return [...finalTags!, { type: 'Orders', id: 'LIST' }];
            }
            return [{ type: 'Orders', id: 'LIST' }];
         }
      }),
      detailOrder: builder.query<IOrders, string>({
         query: (id) => `order/${id}`,
         providesTags: (result, error) => {
            if (result?.order) {
               const finalTag = {
                  type: 'Orders' as const,
                  id: 'LIST'
               };
               return [finalTag];
            }
            return [{ type: 'Orders', id: 'LIST' }];
         }
      }),
      updateOrder: builder.mutation<IOrders, {}>({
         query: ({ id, ...body }) => ({
            url: `order/${id}`,
            method: 'PATCH',
            body
         }),
         invalidatesTags: (result) => [{ type: 'Orders', id: 'LIST' }]
      }),
      cancelOrder: builder.mutation({
         query: (id) => ({
            url: `/order/${id}`,
            method: 'DELETE'
         }),
         invalidatesTags: (result) => [{ type: 'Orders', id: 'LIST' }]
      })
   })
});

export const {
   useGetOrderUserQuery,
   usePostOrderMutation,
   useFilterOrderMutation,
   useGetOrdersAdminQuery,
   useDetailOrderQuery,
   useUpdateOrderMutation,
   useCancelOrderMutation
} = orderAPI;
