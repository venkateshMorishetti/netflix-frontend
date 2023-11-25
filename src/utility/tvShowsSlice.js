import { createSlice } from "@reduxjs/toolkit";
const tvShows = createSlice({
    name: 'tvShows',
    initialState: {
        nowPlayingTvShows: null,
        upcomingTvShows: null,
        popularTvShows: null,
        topRatedTvShows: null,
    },
    reducers: {
        addNowPlayingTvShows: (state, action) => {
            state.nowPlayingTvShows = action.payload;
        },
        addUpcomingTvShows: (state, action) => {
            state.upcomingTvShows = action.payload;
        },
        addPopularTvShows: (state, action) => {
            state.popularTvShows = action.payload;
        },
        addTopRatedTvShows: (state, action) => {
            state.topRatedTvShows = action.payload;
        }
    }
});


export const { addNowPlayingTvShows, addUpcomingTvShows, addPopularTvShows, addTopRatedTvShows } = tvShows.actions;
export default tvShows.reducer;