import LoggedLayout from "../../layouts/logged";
import Index from "../../pages";
import tareasRoutes from "./tareas";

export default [
    ...tareasRoutes,
    {
        path: "/",
        component: Index,
        auth: false,
        layout: LoggedLayout,
    },
];
