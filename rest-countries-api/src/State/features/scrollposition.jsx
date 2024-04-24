import { createSlice } from "@reduxjs/toolkit";

export const scrollpositionSlice = createSlice({
    name:"scrollPosition",
    initialState: {
        value: 0
    },
    reducers:{
        scrollsetting: (state,action)=>{
            state.value = action.payload
        }
    }
})

export const {scrollsetting} = scrollpositionSlice.actions;

export default scrollpositionSlice.reducer;