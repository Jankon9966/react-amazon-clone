import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product", 
    initialState: {},
    reducers: {}
})

export const productActions = productSlice.actions;

export default productSlice;