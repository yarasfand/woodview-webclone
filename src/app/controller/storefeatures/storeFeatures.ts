import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

// Define the initial state with the new plotNumber feature
const initialState: {
  scroll: number;
  requestedScroll: false | number;
  plotNumber: number;
} = {
  scroll: 0,
  requestedScroll: false,
  plotNumber: 0,
};

const landingSlice = createSlice({
  name: "landing",
  initialState,
  reducers: {
    scrollTo: (state, action: PayloadAction<number>) => {
      state.requestedScroll = action.payload;
    },
    scrolledTo: (state, action: PayloadAction<number>) => {
      console.log("Changing scroll state to ", action.payload);
      state.scroll = action.payload;
      state.requestedScroll = false;
    },
    // Add a new reducer to set the plot number
    setPlotNumber: (state, action: PayloadAction<number>) => {
      state.plotNumber = action.payload;
    },
  },
});

// Export the actions
export const { scrollTo, scrolledTo, setPlotNumber } = landingSlice.actions;

// Export the reducer
export const landingSliceReducer = landingSlice.reducer;

// Selector to get scroll state
export const useLandingPageScroll = (state: RootState) =>
  state.landingSliceReducer.scroll;

// Selector to get the plot number
export const usePlotNumber = (state: RootState) =>
  state.landingSliceReducer.plotNumber;
