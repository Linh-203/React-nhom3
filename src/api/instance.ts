import axios from 'axios';
import { store } from '../store/store';
const instance = axios.create({
   baseURL: 'http://localhost:8000/api',
   headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type'
   }
});

instance.interceptors.request.use((config) => {
   const { authReducer } = store.getState();
   const token = authReducer.token;
   if (token !== '') {
      config.headers.Authorization = `Bearer ${token}`;
   }
   return config;
});
export default instance;
