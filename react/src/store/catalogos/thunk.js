import { createAsyncThunk } from "@reduxjs/toolkit";
import { HttpGet } from "../../configs/axios";

export const listEntidades = createAsyncThunk(
    "catalogos/listEntidades",
    async (data, { dispatch }) => {
        const res = await HttpGet("entidades", { dispatch });
        return res;
    }
);
