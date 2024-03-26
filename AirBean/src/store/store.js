import { configureStore } from "@reduxjs/toolkit";
import resetCart from "../reducers/orderReducer";
import registerOrder from "../reducers/orderReducer";

const store = configureStore({
    reducer: {
        cart: resetCart,
        cart: registerOrder
    }
});

export default store;
