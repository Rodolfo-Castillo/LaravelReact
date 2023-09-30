import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./general";
import tareasReducer from "./tareas";
import catalogosReducer from "./catalogos";

export const store = configureStore({
    reducer: {
        general: generalReducer,
        tareas: tareasReducer,
        catalogos: catalogosReducer,
    },
});
