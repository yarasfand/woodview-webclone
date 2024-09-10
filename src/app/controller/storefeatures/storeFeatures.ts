import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
const initialState:{
    scroll: number,
    requestedScroll: false| number
} = {
    scroll: 0,
    requestedScroll: false
}
const landingSlice = createSlice({
    name: "landing",
    initialState,
    reducers:{
        scrollTo : (state, action:PayloadAction<number>)=>{
            state.requestedScroll = action.payload;
        },
        scrolledTo : (state, action:PayloadAction<number>)=>{
            console.log("Changing scroll state to ", action.payload)
            state.scroll = action.payload;
            state.requestedScroll = false
        }
    }
})

export const {scrollTo, scrolledTo} = landingSlice.actions;
export const landingSliceReducer = landingSlice.reducer;
export const useLandingPageScroll = (state:RootState)=>{return state.landingSliceReducer.scroll}