import { createSlice } from '@reduxjs/toolkit'


const rootReducerSlice = createSlice({
  name: 'user_data',
  initialState: [],
  reducers: {
    increment(state, action) {
      // state.push(action.payload);
      return state + action.payload;
    },

    decrement(state, action) {
      // state.push(action.payload);
      return state - action.payload;
    },

    registerUser(state, action) {
      // state.push(action.payload);
      return [...state, action.payload];
    },

    removeUser(state, action) {
      return state.filter((user) => user.id !== action.payload);
    },

  },
});

export const { increment, decrement, registerUser, removeUser } = rootReducerSlice.actions;
export default rootReducerSlice.reducer;
