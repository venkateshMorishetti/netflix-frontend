import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./moviesSlice";
import  userReducer  from "./userSlice";

const appstore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesSlice
    }
})

export default appstore;