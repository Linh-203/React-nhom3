import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../slices/FilterSlice';
import productSideInfoReducer from '../slices/ProductSlice';

export const store = configureStore({
   reducer: { filterReducer, productSideInfoReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;