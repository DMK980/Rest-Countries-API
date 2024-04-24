import {createSlice} from "@reduxjs/toolkit"

export const searchSlice = createSlice({
    name: "search_filter",
    initialState: {
        search: "",
        filter: ""
    },
    reducers: {
        searchSetting: (state,action)=>{
            state.search = action.payload
        },
        filterSetting: (state,action)=>{
            state.filter = action.payload
        }
    }
})

export const {searchSetting,filterSetting} = searchSlice.actions;

export default searchSlice.reducer;