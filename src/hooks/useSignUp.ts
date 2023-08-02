import { useState } from 'react';
// import { useAuthContext } from './useAuthContext';
import { useDispatch } from 'react-redux';
import { saveToken } from '../slices/Auth';
import Cookies from 'js-cookie';
export const useSignUp = () => {
   const dispatch = useDispatch();
   const [error, setError] = useState(null);
   const [isLoading, setIsLoading] = useState(null);
   // const { dispatch } = useAuthContext();
   const signup = async (name, email, password, phone) => {
      setIsLoading(true);
      setError(null);

      const response = await fetch('http://localhost:8000/api/signup', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ name, email, password, phone })
      });
      const json = await response.json();
      if (!response.ok) {
         setIsLoading(false);
         setError(json.error);
      }
      if (response.ok) {
         //luu user vao local
         localStorage.setItem('user', JSON.stringify(json));

         // update lai cai authContext
         dispatch(saveToken(json.token));
         // dispatch({ type: 'LOGIN', payload: json });
         setIsLoading(false);
      }
   };
   return { signup, isLoading, error };
};
