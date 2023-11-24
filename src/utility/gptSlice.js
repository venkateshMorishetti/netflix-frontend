import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptSearchPageToggle: false,
    },
    reducers:{
        addGptSearchPageToggle: (state, action)=>{
            state.gptSearchPageToggle = !state.gptSearchPageToggle;
        }
    }
})


export default gptSlice.reducer;
export const {addGptSearchPageToggle} = gptSlice.actions;