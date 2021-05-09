import axios from 'axios';

export const instance = axios.create({
  baseURL: `http://localhost:8080/api`,
  withCredentials: true,
});

export const fetchAPI = ({ method, url, body }) => instance[method](url, body);
