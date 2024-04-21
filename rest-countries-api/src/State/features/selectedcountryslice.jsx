import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    value: 9
};
export const selectedcountrySlice = createSlice({
    name: "selectedcountry",
    initialState,
    reducers:{
        countryselect : (state,action)=>{
            state.value = action.payload
        }
    }
})

export const { countryselect } = selectedcountrySlice.actions;

export default selectedcountrySlice.reducer;