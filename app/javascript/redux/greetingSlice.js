import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GreetingAPI = '/api/v1/greetings';
const GreetingMethod = '/get/greeting';

const initialState = {};

export const GreetingThunk = createAsyncThunk(GreetingMethod, async () => {
  const greeting = await (await fetch(`${GreetingAPI}`)).json();
  return greeting;
});

const GreetingSlice = createSlice({
  name: 'Greeting',
  initialState,
  reducers: {},
  extraReducers: {
    [GreetingThunk.fulfilled]: (state, action) => {
      const { payload } = action;
      return {
        ...payload,
      };
    },
  },
});

export default GreetingSlice.reducer;
