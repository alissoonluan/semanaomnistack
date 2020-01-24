import axios from 'axios';

const api = axios.create({
    baseURL: 'http://3.3.3.146:3333',
});

export default api;