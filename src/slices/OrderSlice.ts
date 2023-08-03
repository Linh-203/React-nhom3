import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { IOrders } from '../common/orders';
import { getOrdersUser } from '../api/orders';
const initialState = {
    order: [],
    isLoading: false
} as { order: IOrders[], isLoading: boolean }
const userId = '64c70e3980d555c680c5b0d5';
export const fetchOrderUser = createAsyncThunk(
    'orderUser/fetch',
    async (arg, thunkAPI) => {
        try {
            const { data } = await getOrdersUser(userId)
            //  console.log(data.order); 
            return data.order
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const orderSlice = createSlice({
    name: "orders",
    initialState: initialState,
    reducers: {
        fetch: (state, action) => {
            state.order = action.payload
        },

        startLoading: (state) => {
            state.isLoading = true
        },
        endLoading: (state) => {
            state.isLoading = false
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchOrderUser.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchOrderUser.fulfilled, (state, action) => {
            state.order = action.payload
            state.isLoading = false
        })
    }
})

export const { fetch, startLoading, endLoading } = orderSlice.actions
export default orderSlice.reducer