import { createSlice } from "@reduxjs/toolkit";
import { listTareas, addLike, deleteTarea, getTarea } from "./thunk";

const initialState = {
    tareasList: [],
    tarea: {},
    error: false,
    isLoading: false,
};

const tareasSlice = createSlice({
    name: "tareas",
    initialState,
    extraReducers: {
        [listTareas.pending]: (state) => {
            state.isLoading = true;
        },
        [listTareas.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.tareasList = payload;
        },
        [addLike.pending]: (state) => {
            state.isLoading = true;
        },
        [addLike.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            const data = payload.data;
            const tareasL = state.tareasList;
            tareasL.map((tarea) => {
                if (tarea.id == data.id) {
                    tarea.likes = data.likes;
                    tarea.hasVoted = true;
                }
            });
            state.tareasList = tareasL;
        },
        [deleteTarea.pending]: (state) => {
            state.isLoading = true;
        },
        [deleteTarea.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            const id = Number(payload.data);
            const tareasL = state.tareasList;
            const result = tareasL.filter((tarea) => tarea.id !== id);
            state.tareasList = result;
        },
        [getTarea.pending]: (state) => {
            state.isLoading = true;
        },
        [getTarea.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.tarea = payload;
        },
    },
});

export default tareasSlice.reducer;
