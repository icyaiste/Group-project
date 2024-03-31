import { createSlice } from "@reduxjs/toolkit";

const initialState = 'Ingen aktiv beställning finns';

const cartSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    sendOrder(state, action) {
      return action.payload;
    }
  }
});

export const { sendOrder } = cartSlice.actions

export default cartSlice.reducer;