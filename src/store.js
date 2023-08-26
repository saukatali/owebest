import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/rootReducerSlice';
import cartReducer from './reducers/cartReducerSlide';
import productReducer from './reducers/productSlice';
const store = configureStore({
  reducer: {
    userList: userReducer,
    cartList: cartReducer,
    productList: productReducer,
  },
});

// Load state from localStorage
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};
console.log(persistedState)

// Subscribe to store updates and save state to localStorage
store.subscribe(() => {
  const state = store.getState();
  // console.log(state);
  const stateToPersist = {
    userList: state.userList,
    cartList: state.cartList,
  };
  localStorage.setItem('reduxState', JSON.stringify(stateToPersist));
});




export default store;
