import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import userPostReducer from '../features/userPosts/userPostSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userPosts: userPostReducer
  },
});
