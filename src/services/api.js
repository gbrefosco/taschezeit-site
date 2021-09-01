import axios from 'axios';

const api = axios.create({
    baseURL: 'https://contatempo3000.herokuapp.com',
});

export default api;