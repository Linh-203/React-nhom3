import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../slices/FilterSlice';
import productSideInfoReducer from '../slices/ProductSlice';
import cartReducer from '../slices/CartSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { cartApi } from '../api-slice/baseAPI';
export const store = configureStore({
   reducer: {
      filterReducer, productSideInfoReducer,
      cartReducer,
      [cartApi.reducerPath]: cartApi.reducer
   },
   devTools: true,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(cartApi.middleware),
});
setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
