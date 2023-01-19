import { createSlice } from '@reduxjs/toolkit';

export const productslice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        isFetching: false, 
        error: false
    },
    reducers: {
        // Get all Products //
        getProductStart:(state) => {
            state.isFetching = true;
            state.error = false;
        },
        getProductSuccess:(state, action) => {
            state.isFetching = false;
            state.products = action.payload;
        },
        getProductFailure:(state) => {
            state.error = true;
        }
    },
});

export const {
    getProductStart, getProductSuccess, getProductFailure
} = productslice.actions;

export default productslice.reducer;