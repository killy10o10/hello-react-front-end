import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'http://127.0.0.1:3001/api/v1/messages';
const messageRequestMethod = '/get/messages';

export const fetchMessages = createAsyncThunk(
  messageRequestMethod,
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
      return [
        {
          status: 'succeeded',
          ...action.payload,
        }
      ]
    }
  }
});

export const { addMessage } = messageSlice.actions;

export default messageSlice.reducer;
