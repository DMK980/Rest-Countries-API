import { createSlice } from "@reduxjs/toolkit";

export const darkmodeSlice = createSlice({
    name:"darkmode",
    initialState: {
        value: false
    },
    reducers:{
        switching: (state)=>{

            if(state.value){
                state.value = false;
            } else{
                state.value = true;
            }
        }
    }
})

export const {switching} = darkmodeSlice.actions

export default darkmodeSlice.reducer