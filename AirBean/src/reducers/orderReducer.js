import { createSlice } from "@reduxjs/toolkit";

const initialState = '';

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log(action.payload);
      return [...state, action.payload]
    },
    resetCart(state, action) {
      return action.payload;
    },
    saveCart(state, action) {
      console.log('inside save cart');
      return [...state, action.payload]
    },
    readOrder(){
      
       return [ initialState];
    }
  }
});

export const { addToCart, resetCart,saveCart,readOrder } = cartSlice.actions

export default cartSlice.reducer;