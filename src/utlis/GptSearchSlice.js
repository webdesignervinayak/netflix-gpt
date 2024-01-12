import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice({
    name : "GPT",
    initialState : {
        showGptSearch : false
    },
    reducers : {
        toggleGptSearchView : (state) => {
            state.showGptSearch = !state.showGptSearch;
        }
    }

})

export const {toggleGptSearchView } = GptSearchSlice.actions;

export default GptSearchSlice.reducer;

