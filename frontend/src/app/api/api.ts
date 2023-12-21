import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:8090/",
    withCredentials: true,
    withXSRFToken: true
}); 


api.interceptors.request.use((config): any => {
    const token = localStorage.getItem('token');

    // config.headers['Authorization'] = `Bearer 5|wCRPPgUwODnJ4JR0crRHd4hchTJBhpSsxvExCmoYda5803c8`
    config.headers['Authorization'] = `Bearer ${token}`
    config.headers['Content-Type'] = 'application/json'
    // config.headers['Access-Control-Allow-Origin'] = 'http://localhost:8090/'
    // config.headers['Access-Control-Max-Age'] = '0'
    // config.headers['Access-Control-Allow-Methods'] = '*'
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    return config;
}, (error) => {
    return Promise.reject(error);
});


export default api;