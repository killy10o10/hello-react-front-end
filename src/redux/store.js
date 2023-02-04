/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import messageSlice from './message/messageSlice';

export const store = configureStore({
  reducer: {
    messages: messageSlice,
  },
});
