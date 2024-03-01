import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import statusCode from '../utils/statusCode.js';

const initialState = {
  data: [],
  status: statusCode.IDLE,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = statusCode.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = statusCode.IDLE;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = statusCode.ERROR;
      });
  },
});

export const { fetchProducts } = productSlice.actions;

export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async () => {
  const result = await fetch('https://fakestoreapi.com/products');
  const data = await result.json();
  return data;
});

// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {
//     const result = await fetch('https://fakestoreapi.com/products');
//     const data = await result.json();
//     dispatch(fetchProducts(data));
//   };
// }
