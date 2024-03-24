import { createSlice } from "@reduxjs/toolkit"

const initialState = '' // Add initial state here 

const testSlice = createSlice({
    name: 'mySlice',
    initialState,
    reducers: {
        // Add reducers here
    }
});

export default testSlice.reducer;