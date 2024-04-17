import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    countryimg: "",
    countryname: "",
    nativename: "",
    population: "",
    region: "",
    subregion: "",
    capital: "",
    topleveldomain: "",
    currencies: {
        "GYD": {
            "name": "Guyanese dollar",
            "symbol": "$"
        }
    },
    languages: {
        "eng": "English"
    },
    bordercountries: [
        "BRA",
        "SUR",
        "VEN"
    ]
}
export const selectedcountrySlice = createSlice({
    name: "selectedcountry",
    initialState,
    reducers:{
        setselectedcountry : (state,action)=>{
            state = action.payload
        }
    }
})

export const {selectedcountry} = selectedcountrySlice.actions;

export default selectedcountrySlice.reducer;