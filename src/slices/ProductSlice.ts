import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { IProduct, ResponsePaginate } from '../common/product';
import { IQuery, getAllProduct } from '../api/product';

type ProductSideInfo = {
   loading: boolean;
   error: { type: 'error' | 'warn' | 'success'; content: string };
   products: IProduct[];
   inStock: number;
   outStock: number;
   amount: number;
   maxPrice: number;
};
const initState: ProductSideInfo = {
   products: [],
   inStock: 0,
   outStock: 0,
   amount: 0,
   loading: false,
   error: { type: 'success', content: '' },
   maxPrice: 0
};
export const fetchProduct = createAsyncThunk<ResponsePaginate<IProduct[]>, IQuery>(
   'fetchProduct',
   async (arg, thunkApi) => {
      try {
         const { data } = await getAllProduct(arg);
         return data;
      } catch (error) {
         return thunkApi.rejectWithValue(error);
      }
   }
);
export const productSlice = createSlice({
   name: 'product_side_info',
   initialState: initState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchProduct.pending, (state) => {
         state.loading = true;
      });
      builder.addCase(fetchProduct.fulfilled, (state, action) => {
         state.loading = false;
         state.products = action.payload.data;
         state.amount = action.payload.pagination.totalItems;
         state.inStock = action.payload.inStock;
         state.outStock =
            action.payload.pagination.totalItems - action.payload.inStock > 0
               ? action.payload.pagination.totalItems - action.payload.inStock
               : 0;
         state.maxPrice = action.payload.maxPrice;
         localStorage.setItem('max', JSON.stringify(action.payload.maxPrice));
      });
      builder.addCase(fetchProduct.rejected, (state, action) => {
         state.loading = false;
         state.products = [];
         state.error = { ...state.error, type: 'error', content: action.error as string };
      });
   }
});
export const productsSelector = (state: RootState) => state.productsReducer.products;
export const allInfoSelector = (state: RootState) => state.productsReducer;
export default productSlice.reducer;
