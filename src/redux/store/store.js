import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from "../slices/slider-slice";

const store = configureStore({
    reducer: { slider: sliderSlice.reducer }
})

export default store;