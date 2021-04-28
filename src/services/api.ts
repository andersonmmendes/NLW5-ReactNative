import axios from 'axios';

const api = axios.create({
  baseURL: 'http://190.0.5.54:3333',
});

export default api;