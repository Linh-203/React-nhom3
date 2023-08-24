import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import { useDispatch } from 'react-redux';
import { getToken } from '../api/auth';
import { deleteTokenAndUser, saveTokenAndUser } from '../slices/AuthSlice';
const ClientLayout = () => {
   const dispatch = useDispatch();
   useEffect(() => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const user = JSON.parse(localStorage.getItem('auth') ? localStorage.getItem('auth')! : '{}');
      void (async () => {
         const { data } = await getToken();
         // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
         if (data.token === '') {
            dispatch(deleteTokenAndUser());
         } else {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            dispatch(saveTokenAndUser({ user, token: data.token }));
         }
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
