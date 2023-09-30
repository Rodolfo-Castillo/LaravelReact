import { createAsyncThunk } from "@reduxjs/toolkit";
import { HttpGet, HttpPut, HttpPost, HttpDelete } from "../../configs/axios";

export const listTareas = createAsyncThunk(
    "tareas/listTareas",
    async (data, { dispatch }) => {
        const res = await HttpGet(`tareas`, { dispatch });
        return res;
    }
);

export const addLike = createAsyncThunk(
    "tareas/addLike",
    async (params, { dispatch }) => {
        const res = await HttpPut(
            `tarea/${params.idTarea}`,
            { likes: params.likes },
            { dispatch }
        );
        return res;
    }
);

export const addTarea = createAsyncThunk(
    "tareas/addTarea",
    async (data, { dispatch }) => {
        const res = await HttpPost(`tarea`, data, { dispatch });
        return res;
    }
);

export const deleteTarea = createAsyncThunk(
    "tareas/deleteTarea",
    async (id, { dispatch }) => {
        const res = await HttpDelete(`tarea/${id}`, { dispatch });
        return res;
    }
);

export const getTarea = createAsyncThunk(
    "tareas/getTarea",
    async (id, { dispatch }) => {
        const res = await HttpGet(`tarea/${id}`, { dispatch });
        return res;
    }
);
