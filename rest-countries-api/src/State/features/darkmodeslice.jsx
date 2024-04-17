import { createSlice } from "@reduxjs/toolkit";

export const darkmodeSlice = createSlice({
    name:"darkmode",
    initialState: {
        value: false
    },
    reducers:{
        switching: (state)=>{
            if(state.darkmode.value){
                state.darkmode.value = false;
            } else{
                state.darkmode.value = true;
            }
        }
    }
})

export const {switching} = darkmodeSlice.actions

export default darkmodeSlice.reducer