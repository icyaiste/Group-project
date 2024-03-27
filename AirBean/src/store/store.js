import { configureStore } from "@reduxjs/toolkit";
import resetCart from "../reducers/orderReducer";
import addToCart from "../reducers/orderReducer";


const store = configureStore({
    reducer: {
        cart: resetCart,
        cart: addToCart
    }
});

export default store;
