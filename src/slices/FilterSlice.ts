import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

type InitialState = {
   sort: string;
   order: 'asc' | 'desc';
   limit: number;
   page: number;
   fromPrice: number;
   toPrice: number;
   cate: string;
   inStock: boolean;
   outStock: boolean;
};
const initState: InitialState = {
   order: 'asc',
   limit: 6,
   page: 1,
   cate: '',
   fromPrice: 1,
   toPrice: 1,
   sort: 'createAt',
   inStock: false,
   outStock: false
};
export const filterSlice = createSlice({
   name: 'filter',
   initialState: initState,
   reducers: {
      setSort: (state: InitialState, action: { type: string; payload: string }) => {
         state.sort = action.payload;
      },
      setLimit: (state: InitialState, action: { type: string; payload: number }) => {
         state.limit = action.payload;
      },
      setCate: (state: InitialState, action: { type: string; payload: string }) => {
         state.cate = action.payload;
      },
      setPage: (state: InitialState, action: { type: string; payload: number }) => {
         state.page = action.payload;
      },
      setFromPrice: (state: InitialState, action: { type: string; payload: number }) => {
         state.fromPrice = action.payload;
      },
      setToPrice: (state: InitialState, action: { type: string; payload: number }) => {
         state.toPrice = action.payload;
      },
      setInStock: (state: InitialState, action: { type: string; payload: boolean }) => {
         state.inStock = action.payload;
      },
      setOutStock: (state: InitialState, action: { type: string; payload: boolean }) => {
         state.outStock = action.payload;
      },
      setOrder: (state: InitialState, action: { type: string; payload: 'asc' | 'desc' }) => {
         state.order = action.payload;
      }
   }
});
export const allQuerySelector = (state: RootState) => state.filterReducer;
export default filterSlice.reducer;
