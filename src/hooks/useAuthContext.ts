import { AuthContext } from '../context/AuthContext.jsx';
import { useContext } from 'react';

export const useAuthContext = () => {
   const context = useContext(AuthContext);
   if (!context) {
      throw Error('useAuthContext phai duoc su dung ben trong AuthContextProvider');
   }
   return context;
};
