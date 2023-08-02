import { createSlice } from '@reduxjs/toolkit';

type ProductSideInfo = {
   token: string;
};
const initState: ProductSideInfo = {
   token: ''
};

export const authToken = createSlice({
   name: 'auth',
   initialState: initState,
   reducers: {
      saveToken: (state, action) => {
         console.log(action.payload);
         state.token = action.payload;
      },
      deleteToken: (state) => {
         state.token = '';
      }
   }
});
export const { saveToken, deleteToken } = authToken.actions;
export default authToken.reducer;
