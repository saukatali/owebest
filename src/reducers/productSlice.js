import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchData = createAsyncThunk('data/fetch', async () => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // console.log(data.products)
    return data.products;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
});

const initialState = {
  product: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
      });
  },
});

export { fetchData };

// export const {registerUser, removeUser, fetchData } = productSlice.actions;
export default productSlice.reducer;