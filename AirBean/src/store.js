import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./reducers/Reducer";

const store = configureStore({
    reducer: {
        mySlice: testSlice,// Add reducers here
    },
});

export default store