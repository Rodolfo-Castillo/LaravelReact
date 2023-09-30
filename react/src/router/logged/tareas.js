import LoggedLayout from "../../layouts/logged";
import Tareas from "../../pages/tareas";
import Add from "../../pages/tareas/addForm";

export default [
    {
        path: "/tareas",
        component: Tareas,
        auth: false,
        layout: LoggedLayout,
    },
    {
        path: "/tarea",
        component: Add,
        auth: false,
        layout: LoggedLayout,
    },
    {
        path: "/tarea/:id",
        component: Add,
        auth: false,
        layout: LoggedLayout,
    },
];
