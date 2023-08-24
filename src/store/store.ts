import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../slices/FilterSlice';
import productsReducer from '../slices/ProductSlice';
import cartReducer from '../slices/CartSlice';
import authReducer from '../slices/AuthSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { cartApi } from '../api-slice/cartAPI';
import { orderAPI } from '../api-slice/orderAPI';
export const store = configureStore({
   reducer: {
      filterReducer,
      productsReducer,
      cartReducer,
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
