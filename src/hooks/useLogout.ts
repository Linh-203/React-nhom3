import { useDispatch } from 'react-redux';
import { deleteToken } from '../slices/Auth';
export const useLogout = () => {
   const dispatch = useDispatch();
   const logout = () => {
      //xoa khoi local
      localStorage.removeItem('user');
      //dispatch logout
      dispatch(deleteToken());
   };
   return logout;
};
