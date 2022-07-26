import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:29910'
});

export default api;