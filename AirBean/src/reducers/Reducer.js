import { createSlice } from "@reduxjs/toolkit"

const initialState = [];

const MenuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        AddToCart(state, action){
            state.push(action.payload);
        }
    }
});

export const { AddToCart } = MenuSlice.actions;
export default MenuSlice.reducer;