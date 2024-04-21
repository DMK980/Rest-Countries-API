import { configureStore } from "@reduxjs/toolkit"
import countryReducer from "./features/countryslice"
import darkmodeReducer from "./features/darkmodeslice"
import selectedcountryReducer from "./features/selectedcountryslice"

export default configureStore({
    reducer: {
        country: countryReducer,
        darkmode: darkmodeReducer,
        selectedcountry: selectedcountryReducer
    }
})