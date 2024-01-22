import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice({
    name : "GPT",
    initialState : {
        showGptSearch : false,
        movieNames : null,
        movieResults : null,
    },
    reducers : {
        toggleGptSearchView : (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult : (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }

})

export const {toggleGptSearchView, addGptMovieResult} = GptSearchSlice.actions;

export default GptSearchSlice.reducer;

