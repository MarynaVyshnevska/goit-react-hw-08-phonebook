import axios from "axios";

export const privateApi = axios.create({
    baseURL: 'https://connections-api.herokuapp.com'
});

export const publicApi = axios.create({
    baseURL: 'https://connections-api.herokuapp.com'
});

export const token = {
    set: (token) => {
        publicApi.defaults.headers.Authorization = `Bearer ${token}`;
    },
    remove: () => {
        publicApi.defaults.headers.Authorization = null;
    },
}