import { createSlice } from "@reduxjs/toolkit";
import { login } from "./thunk";

const initialState = {
    result: {},
    error: false,
    loading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [login.pending]: (state) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, { payload }) => {
            state.loading = false;
            if (payload.token) {
                state.result = payload.data;
                localStorage.setItem("token", payload.token);
                localStorage.setItem("tokenDB", payload.data.token);
                //console.log(localStorage.getItem('tokenDB'));
                window.location = "/";
            }
        },
    },
});
export default authSlice.reducer;
