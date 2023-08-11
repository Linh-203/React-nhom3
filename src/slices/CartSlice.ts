import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ICart } from '../common/cart';
import { getCart, removeOneProductInCart, updateCart } from '../api/cart';
const initialState = {
   cart: [],
   isLoading: false
} as { cart: ICart[]; isLoading: boolean };
export const fetchCart = createAsyncThunk('cart/fetch', async (arg: string, thunkAPI) => {
   try {
      const { data } = await getCart(arg);
      // console.log(data.cart);
      return data.cart;
   } catch (err) {
      return thunkAPI.rejectWithValue(err);
   }
});

export const handleUpdateCart = createAsyncThunk('cart/update', async (arg: ICart, thunkAPI) => {
   try {
      await updateCart(arg);
   } catch (err) {
      return thunkAPI.rejectWithValue(err);
   }
});

// export const removeItemInCart = createAsyncThunk('cart/remove', async (arg: string, thunkAPI) => {
//    try {
//       await removeOneProductInCart(userId, arg);
//    } catch (err) {
//       return thunkAPI.rejectWithValue(err);
//    }
// });
export const cartSlice = createSlice({
   name: 'cart',
   initialState: initialState,
   reducers: {
      fetch: (state, action) => {
         state.cart = action.payload;
      },

      startLoading: (state) => {
         state.isLoading = true;
      },
      endLoading: (state) => {
         state.isLoading = false;
      }
   },
   extraReducers: (builder) => {
      builder.addCase(fetchCart.pending, (state) => {
         state.isLoading = true;
      });
      builder.addCase(fetchCart.fulfilled, (state, action) => {
         state.cart = action.payload;
         state.isLoading = false;
      });
   }
});

export const { fetch, startLoading, endLoading } = cartSlice.actions;
export default cartSlice.reducer;
