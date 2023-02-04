/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import messageSlice from './message/messageSlice';

const reducer = combineReducers({
  messages: messageSlice,
});

const store = configureStore({
  reducer
});

export default store;
