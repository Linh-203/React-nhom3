import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import { useDispatch } from 'react-redux';
import { getToken } from '../api/auth';
import { saveTokenAndUser } from '../slices/AuthSlice';
const ClientLayout = () => {
   const dispatch = useDispatch();
   useEffect(() => {
      console.log(window.location.pathname);
      const user = JSON.parse(localStorage.getItem('auth') ? localStorage.getItem('auth')! : '{}');
      void (async () => {
         const { data } = await getToken();
         dispatch(saveTokenAndUser({ user, token: data.token }));
      })();
   }, [window.location.pathname]);
   return (
      <>
         <Header />
         <div className='relative top-[120px]'>
            {' '}
            <Outlet /> <Footer />
         </div>
      </>
   );
};

export default ClientLayout;
