import { IUser } from '../common/user';
import instance from './instance';

export const loginApi = (user: IUser) => {
   return instance.post('/login', user);
};

export const signupApi = (user: IUser) => {
   return instance.post('/signup', user);
};

export const getToken = () => {
   return instance.get('/token', { withCredentials: true });
};
export const clearToken = () => {
   return instance.delete('/token', { withCredentials: true });
};
