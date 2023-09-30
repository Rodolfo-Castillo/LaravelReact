//Aqui hacen las peticiones de la base de datos
import { createAsyncThunk } from "@reduxjs/toolkit";
import { HttpPost } from "../../configs/axios";

export const login = createAsyncThunk(
    "auth/login",
    async (data, { dispatch }) => {
        const params = {
            email: data.email,
            password: data.password,
        };
        console.log(params);
        localStorage.removeItem("token");
        const res = await HttpPost("/login", params, dispatch);
        return res;
    }
);
