import axios from "axios";
import { error } from "console";


const api = axios.create({
    baseURL: "http://localhost:8090/",
    withCredentials: true
});


api.interceptors.request.use((config): any => {
    const token = localStorage.getItem('token');

    config.headers['Authorization'] = `Bearer ${token}`
    config.headers['Content-Type'] = 'application/json'
    config.headers['Access-Control-Allow-Origin'] = '*'
    return config;
}, (error) => {
    return Promise.reject(error);
});


export default api;