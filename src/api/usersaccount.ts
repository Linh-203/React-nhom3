import { IUser } from '../common/users';
import instance from './instance';

export const getUserId = async (id: string) => {
    return await instance.get('/acc/' + id);
 };
 export const removeUserId = async (id: string) => {
    return await instance.delete('/acc/' + id);
 };
 export const updateUser = async (id: string, data: IUser) => {
    return await instance.patch('/acc/' + id, data);
 };

 const userService = { getUserId, updateUser };
export default userService;