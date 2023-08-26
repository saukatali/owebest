import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
};

const cartReducerSlice = createSlice({
  name: 'cartData',
  initialState,
  reducers: {
        // addToCart(state, action) {
        //     console.log(action.payload)
        //     return [...state, action.payload];
        //   },
               
        //   removeToCart(state, action) {
        //     return state.filter((cart) => cart.id !== action.payload);
        //   },

        addItemToCart: (state, action) => {
          let find = state.items.findIndex((item) => item.id === action.payload.id);
          if(find >=0)
          {
            state.items[find].quantity += 1;
          }else{
            state.items.push(action.payload);
          }
        },
        
        removeItemFromCart: (state, action) => {
          state.items = state.items.filter(item => item.id !== action.payload);
        },
    }
})

export const { addItemToCart, removeItemFromCart} = cartReducerSlice.actions;
export default cartReducerSlice.reducer;