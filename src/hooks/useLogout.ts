import { useDispatch } from 'react-redux';
import { deleteTokenAndUser } from '../slices/AuthSlice';
export const useLogout = () => {
   const dispatch = useDispatch();
   const logout = () => {
      //xoa khoi local
      localStorage.removeItem('user');
      //dispatch logout
      dispatch(deleteTokenAndUser());
   };
   return logout;
};
