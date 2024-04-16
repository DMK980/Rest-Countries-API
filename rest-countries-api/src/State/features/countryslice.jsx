import { createSlice } from "@reduxjs/toolkit";

// Get data from api endpoint
const countriesApi = async ()=>{
    let countries;
    try {
        const url = "https://restcountries.com/v3.1/all?fields=name,tld,subregion,region,population,languages,flags,currencies,cca2,ccn3,capital,borders"
        const response = await fetch(url)
        const data = await response.json();
        countries = data;
    } catch (error) {
        console.log(error)
    }
    return countries;
}
// set data as initial state
const initialState = {
    countries: await countriesApi()
}
// Slice
export const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers:{}
})


export default countrySlice.reducer;

