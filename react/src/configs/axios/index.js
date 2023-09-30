import axios from "axios";
import { openSnackbar } from "../../store/general";

const HTTP = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    withCredentials: true,
});

HTTP.interceptors.request.use((request) => {
    // if (localStorage.getItem("token"))
    //     request.headers.Authorization = `Bearer ${localStorage.getItem(
    //         "token"
    //     )}`;
    // if (localStorage.getItem("tokenDB"))
    //     request.headers["tokendb"] = `${localStorage.getItem("tokenDB")}`;
    // console.log(request);
    return request;
});

HTTP.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // if error.response.status == 401 Unauthorized send to login
        return Promise.reject(error);
    }
);

function generateSnackOptions(error, dispatch) {
    // if (error.response.status == 401) window.location.href = '/login'

    let type;
    switch (error.response.status) {
        case 400:
            error = error.message;
            type = "warning";
            break;
        case 404:
            error = error.message;
            type = "warning";
            break;
        case 500:
            error = error.message;
            type = "error";
            break;
        default:
            break;
    }
    const data = {
        message: error.message,
        type,
    };
    if (dispatch) dispatch(openSnackbar(data));
}

export const HttpPost = async (url, params, dispatch) => {
    try {
        const res = await HTTP.post(url, params, {
            headers: {
                "Content-type": "application/json",
            },
        });
        return res.data;
    } catch (error) {
        generateSnackOptions(error, dispatch);
        return error.response.data;
    }
};

export const HttpPostMedia = async (url, params, dispatch) => {
    try {
        const res = await HTTP.post(url, params, {
            headers: {
                "Content-type": "multipart/form-data",
            },
        });
        return res.data;
    } catch (error) {
        generateSnackOptions(error, dispatch);
        return error.response.data;
    }
};

export const HttpPut = async (url, params, dispatch) => {
    try {
        const res = await HTTP.put(url, params);
        // generateSuccessSnackOptions(res, dispatch);
        return res.data;
    } catch (error) {
        generateSnackOptions(error, dispatch);
        return error.response.data;
    }
};

export const HttpDelete = async (url, params, dispatch) => {
    try {
        const res = await HTTP.delete(url, params);
        return res.data;
    } catch (error) {
        generateSnackOptions(error, dispatch);
        return error.response.data;
    }
};

export const HttpGet = async (url, params, dispatch) => {
    try {
        const res = await HTTP.get(url, params);
        return res.data;
    } catch (error) {
        generateSnackOptions(error, dispatch);
        return error.response.data;
    }
};
