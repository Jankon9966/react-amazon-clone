import { createSlice } from "@reduxjs/toolkit";
import { SLIDER_IMAGES } from "../../utils/slider/dummySliderData";

const sliderSlice = createSlice({
    name: "slider",
    initialState: {
        value: 0,
        length: SLIDER_IMAGES.length,
    },
    reducers: {
        showNextImage(state, action) {
            state.value = action.payload > state.length - 1 ? 0 : action.payload;
        },
        showPreviousImage(state, action) {
            state.value = action.payload < 0 ? state.length - 1 : action.payload;
        },
    }
})

export const sliderActions = sliderSlice.actions;
export default sliderSlice;