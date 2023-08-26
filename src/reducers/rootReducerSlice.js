import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: [], 
};

const rootReducerSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    
    registerUser(state, action) {
      state.user.push(action.payload);
      // return [...state, action.payload];
    },

    removeUser(state, action) {
      state.userList = state.user.filter(user => user.id !== action.payload);
      // return state.filter((user) => user.id !== action.payload);
    },

    fetchUserById(state, action) {
      // state.push(action.payload);
      return [...state, action.payload];
    },

  },
});

export const {registerUser, removeUser, fetchUserById } = rootReducerSlice.actions;
export default rootReducerSlice.reducer;
