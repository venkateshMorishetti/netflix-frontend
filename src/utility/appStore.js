import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import  userReducer  from "./userSlice";
import gptReducer from "./gptSlice";

const appstore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer
    }
})

export default appstore;