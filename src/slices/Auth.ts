import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../common/user';

type ProductSideInfo = {
   token: string;
   user: IUser;
};

const initState: ProductSideInfo = {
   token: '',
   user: {} as IUser
};

export const authToken = createSlice({
   name: 'auth',
   initialState: initState,
   reducers: {
      saveTokenAndUser: (state, action) => {
         localStorage.setItem('auth', JSON.stringify(action.payload));
         state.token = action.payload.token;
         state.user = action.payload.user;
      },
      deleteTokenAndUser: (state) => {
         localStorage.removeItem('auth');
         state.token = '';
         state.user = {};
      }
   }
});

export const { saveTokenAndUser, deleteTokenAndUser } = authToken.actions;

export default authToken.reducer;
