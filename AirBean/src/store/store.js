import { configureStore } from "@reduxjs/toolkit";
import resetCart  from "../reducers/orderReducer";
import addToCart from "../reducers/orderReducer";
import removeFromCart from "../reducers/orderReducer";
import sendOrder from "../reducers/statusReducer";

const store = configureStore({
    reducer: {
        cart: resetCart,
        cart: addToCart,
        cart: removeFromCart,
        orders: sendOrder
    }
   
});

export default store;


