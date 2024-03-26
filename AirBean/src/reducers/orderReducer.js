import { createSlice } from "@reduxjs/toolkit";

const initialState = '';

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    registerOrder(state, action) {
      console.log(action.payload);
      return [...state, action.payload]
    },
    resetCart(state, action) {
      return action.payload;
    }
  }
});

export const { registerOrder, resetCart } = cartSlice.actions

export default cartSlice.reducer;