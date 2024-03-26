import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./reducers/Reducer";

const store = configureStore({
    reducer: {
        Cart: MenuSlice,
    },
});

export default store