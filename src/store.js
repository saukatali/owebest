import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducerSlice';

export const store = configureStore({
  reducer: {
    user: rootReducer, 
  },
});

export default store; 