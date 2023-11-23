import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies:null,
        movieTrailer: null,
        trendingMovies:null,
        popularMovies:null,
        upcomingMovies:null
    },
    reducers:{
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addMovieTrailer:(state, action)=>{
            state.movieTrailer = action.payload;
        },
        addTrendingNowMovies: (state, action) => {
            state.trendingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        }
    }
})

export const { addNowPlayingMovies, addMovieTrailer , addTrendingNowMovies, addPopularMovies, addUpcomingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;