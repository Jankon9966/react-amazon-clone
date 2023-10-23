import { configureStore } from "@reduxjs/toolkit";
import sliderSlice from "../slices/slider-slice";
import productSlice from "../slices/product-slice";

const store = configureStore({
  reducer: { slider: sliderSlice.reducer, product: productSlice.reducer },
});

export default store;
