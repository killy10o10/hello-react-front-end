import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'http://127.0.0.1:3001/api/v1/messages';

export const fetchMessages = createAsyncThunk(
  'messages/fetchMessages',
  async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
  },
);

const messageSlice = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    addMessage(state, action) {
      state.push(action.payload);
    },
  },

  extraReducers: {
    [fetchMessages.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.push(action.payload);
    },
  },
});

export const { addMessage } = messageSlice.actions;

export default messageSlice.reducer;
