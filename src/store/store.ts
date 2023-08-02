import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../slices/FilterSlice';
import productsReducer from '../slices/ProductSlice';
import authReducer from '../slices/Auth';
export const store = configureStore({
   reducer: { filterReducer, productsReducer, authReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
