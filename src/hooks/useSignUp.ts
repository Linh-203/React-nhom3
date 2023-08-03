import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveTokenAndUser } from '../slices/Auth';
import { useNavigate } from 'react-router-dom';
import { signupApi } from '.././api/auth';
// import Cookies from 'js-cookie';
export const useSignUp = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [error, setError] = useState(null);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const signup = async (name, email, password, phone) => {
      setIsLoading(true);
      setError(null);

      const response = await signupApi({ name, email, password, phone });
      const json = await response.data;
      if (json.error) {
         setIsLoading(false);
         setError(json.error);
      }
      if (!json.error) {
         // update lai cai authContext
         dispatch(saveTokenAndUser(json));
         setIsLoading(false);
         navigate('/');
      }
   };
   return { signup, isLoading, error };
};
