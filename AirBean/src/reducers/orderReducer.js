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
    }
  }
});

export const { addToCart, resetCart } = cartSlice.actions

export default cartSlice.reducer;