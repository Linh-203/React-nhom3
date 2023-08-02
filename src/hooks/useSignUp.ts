import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveTokenAndUser } from '../slices/Auth';
import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
export const useSignUp = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [error, setError] = useState(null);
   const [isLoading, setIsLoading] = useState<boolean>(false);
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
         // update lai cai authContext
         dispatch(saveTokenAndUser(json));
         setIsLoading(false);
         navigate('/');
      }
   };
   return { signup, isLoading, error };
};
