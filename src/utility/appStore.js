import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import  userReducer  from "./userSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
import tvShowsReducer from "./tvShowsSlice";

const appstore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        config:configReducer,
        tvShows:tvShowsReducer
    }
})

export default appstore;