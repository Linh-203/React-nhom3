import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveTokenAndUser } from '../slices/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../api/auth';
// import Cookies from 'js-cookie';
export const useLogin = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [error, setError] = useState(null);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const login = async (email, password) => {
      setIsLoading(true);
      setError(null);
      const response = await loginApi({ email, password }).catch(({ response: { data } }) => {
         return data.error;
      });
      if (!response.data) {
         alert(response);
         setIsLoading(false);
      }
      if (response.data) {
         const json = response.data;
         console.log(json);
         dispatch(saveTokenAndUser(json));
         setIsLoading(false);

         if (json.user.role !== 'admin') {
            navigate('/');
         } else {
            navigate('/admin');
         }
      }
   };
   return { login, isLoading, error };
};
