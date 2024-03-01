import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice.js';
import productSlice from './productSlice.js';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
  },
});

export default store;
