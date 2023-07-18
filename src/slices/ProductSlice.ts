import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

type ProductSideInfo = {
   inStock: number;
   outStock: number;
   amount: number;
};
const initState: ProductSideInfo = {
   inStock: 0,
   outStock: 0,
   amount: 0
};

export const productSlice = createSlice({
   name: 'product_side_info',
   initialState: initState,
   reducers: {
      setInStock: (state: ProductSideInfo, action: { type: string; payload: number }) => {
         state.inStock = action.payload;
      },
      setOutStock: (state: ProductSideInfo, action: { type: string; payload: number }) => {
         state.outStock = action.payload;
      },
      setAmount: (state: ProductSideInfo, action: { type: string; payload: number }) => {
         state.amount = action.payload;
      }
   }
});

export const allInfoSelector = (state: RootState) => state.productSideInfoReducer;
export default productSlice.reducer;
