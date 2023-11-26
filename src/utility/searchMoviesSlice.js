import { createSlice } from "@reduxjs/toolkit";
const searchMoviesSlice = createSlice({
    name: 'searchMovies',
    initialState: {
        searchQuery:null,
        searchResults:null
    },
    reducers:{
        addSearchResults:(state, action)=>{
            state.searchQuery = action.payload.searchQuery;
            state.searchResults = action.payload.searchResults.results;
        }
    }
})


export default searchMoviesSlice.reducer;
export const {addSearchResults} = searchMoviesSlice.actions;