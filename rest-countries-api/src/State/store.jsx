import { configureStore } from "@reduxjs/toolkit"
import countryReducer from "./features/countryslice"
import darkmodeReducer from "./features/darkmodeslice"
import selectedcountryReducer from "./features/selectedcountryslice"
import searchsliceReducer from "./features/searchslice"
import scrollpositionReducer from "./features/scrollposition"

export default configureStore({
    reducer: {
        country: countryReducer,
        darkmode: darkmodeReducer,
        selectedcountry: selectedcountryReducer,
        search_filter: searchsliceReducer,
        scrollPosition: scrollpositionReducer
    }
})