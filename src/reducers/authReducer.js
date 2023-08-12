import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  loading: false,
  error: '',
};

const registerUser = createAsyncThunk(
  'registerUser',
  async (body_data) => {
    console.log(body_data)
    const response = await fetch('https://dummyjson.com/users/add', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body_data),
    });
    return await response.json();
  }
);

export const authReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.error) {
          state.error = action.payload.error;
        }
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      });
  },
});

export { registerUser };
export default authReducer.reducer;
