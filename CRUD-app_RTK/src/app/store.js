import { configureStore } from '@reduxjs/toolkit';
import userDetail from '../features/userDetailSlice.js';

const store = configureStore({
  reducer: {
    user: userDetail,
  },
});

export default store;
