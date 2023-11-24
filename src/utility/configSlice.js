import { createSlice } from "@reduxjs/toolkit";

const configSlice= createSlice({
    name: "config",
    initialState:{
        selectedLanguage: "en",
        currentTab:"/browse"
    },
    reducers:{
        updateSelectedLanguage: (state, action)=>{
            state.selectedLanguage = action.payload;
        },
        updateCurrentTab: (state, action) => {
            state.currentTab = action.payload;
        }
    }
})


export const { updateSelectedLanguage, updateCurrentTab } = configSlice.actions;
export default configSlice.reducer;