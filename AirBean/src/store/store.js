import { configureStore } from "@reduxjs/toolkit";
import resetCart from "../reducers/orderReducer";
import addToCart from "../reducers/orderReducer";
import removeFromCart from "../reducers/orderReducer";

const store = configureStore({
    reducer: {
        cart: resetCart,
        cart: addToCart,
        cart: removeFromCart
    }
});

export default store;
