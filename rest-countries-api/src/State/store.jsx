import { configureStore } from "@reduxjs/toolkit"
import countryReducer from "./features/countryslice"

export default configureStore({
    reducer: {
        country: countryReducer
    }
})