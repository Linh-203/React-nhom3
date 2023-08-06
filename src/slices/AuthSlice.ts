// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { IUser } from '../common/user';
// import { getToken } from '../api/auth';

// type AuthSideInfo = {
//    token: string;
//    user: IUser;
// };

// const initState: AuthSideInfo = {
//    token: '',
//    user: {} as IUser
// };
// export const checkUserAndToken = createAsyncThunk('auth/checkUserAndToken', async (_, thunkApi) => {
//    const { user }: AuthSideInfo = JSON.parse(localStorage.getItem('auth') as string) || {
//       user: {}
//    };
//    try {
//       if (!user) {
//          const { data } = await getToken();
//          return { user, token: data.token } as AuthSideInfo;
//       }
//       return;
//    } catch (error) {
//       return thunkApi.rejectWithValue(error);
//    }
// });
// export const authToken = createSlice({
//    name: 'auth',
//    initialState: initState,
//    reducers: {
//       saveTokenAndUser: (state, action) => {
//          localStorage.setItem('auth', JSON.stringify(action.payload.user));
//          state.token = action.payload.token;
//          state.user = action.payload.user;
//       },
//       deleteTokenAndUser: (state) => {
//          localStorage.removeItem('auth');
//          state.token = '';
//          state.user = {} as IUser;
//       }
//       // loadTokenAndUser: (state) => {
//       //    const { token, user }: AuthSideInfo = JSON.parse(localStorage.getItem('auth') as string) || {
//       //       token: '',
//       //       user: {}
//       //    };
//       //    state.token = token;
//       //    state.user = user;
//       // }
//    },
//    extraReducers: (builder) => {
//       builder.addCase(checkUserAndToken.fulfilled, (state, action) => {
//          // Add user to the state array
//          state.token = action.payload?.token as string;
//          state.user = action.payload?.user as IUser;
//       });
//    }
// });

// export const { saveTokenAndUser, deleteTokenAndUser } = authToken.actions;

// export default authToken;
import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../common/user';

type AuthSideInfo = {
   token: string;
   user: IUser;
};

const initState: AuthSideInfo = {
   token: '',
   user: {} as IUser
};

export const authToken = createSlice({
   name: 'auth',
   initialState: initState,
   reducers: {
      saveTokenAndUser: (state, action) => {
         localStorage.setItem('auth', JSON.stringify(action.payload.user));
         state.token = action.payload.token;
         state.user = action.payload.user;
      },
      deleteTokenAndUser: (state) => {
         localStorage.removeItem('auth');
         state.token = '';
         state.user = {} as IUser;
      }
   }
});

export const { saveTokenAndUser, deleteTokenAndUser } = authToken.actions;

export default authToken.reducer;
