import { useDispatch } from 'react-redux';
import { deleteTokenAndUser } from '../slices/AuthSlice';
import { clearToken } from '../api/auth';
export const useLogout = () => {
   const dispatch = useDispatch();
   const logout = async () => {
      //xoa khoi local
      localStorage.removeItem('user');
      //dispatch logout
      dispatch(deleteTokenAndUser());
      await clearToken();
   };
   return logout;
};
