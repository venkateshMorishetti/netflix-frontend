import { createSlice } from "@reduxjs/toolkit";

const configSlice= createSlice({
    name: "config",
    initialState:{
        selectedLanguage: "en"
    },
    reducers:{
        updateSelectedLanguage: (state, action)=>{
            state.selectedLanguage = action.payload;
        }
    }
})


export const { updateSelectedLanguage } = configSlice.actions;
export default configSlice.reducer;