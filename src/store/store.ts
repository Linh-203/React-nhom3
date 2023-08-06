import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../slices/FilterSlice';
import productsReducer from '../slices/ProductSlice';
import cartReducer from '../slices/CartSlice';
import orderReducer from '../slices/OrderSlice';
import authReducer from '../slices/AuthSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { cartApi } from '../api-slice/baseCartAPI';
import { orderAPI } from '../api-slice/baseOrderAPI';
export const store = configureStore({
   reducer: {
      filterReducer,
      productsReducer,
      cartReducer,
      orderReducer,
      authReducer,
      [cartApi.reducerPath]: cartApi.reducer,
      [orderAPI.reducerPath]: orderAPI.reducer
   },
   devTools: true,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartApi.middleware, orderAPI.middleware)
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
