import { createSlice } from "@reduxjs/toolkit";
import { listEntidades } from "./thunk";

const initialState = {
    entidades: [],
    error: false,
    isLoading: false,
};

const catalogosSlice = createSlice({
    name: "catalogos",
    initialState,
    extraReducers: {
        [listEntidades.pending]: (state) => {
            state.isLoading = true;
        },
        [listEntidades.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.entidades = payload;
        },
    },
});

export default catalogosSlice.reducer;
