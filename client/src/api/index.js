import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const signinUser = (formData) => API.post('/user/signin', formData);
export const registerUser = (formData) => API.post('/user/register', formData);