import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

const ClientLayout = () => {
   return (
      <>
         <Header />
         <Outlet/>
         <div className='h-[1000px]'></div>
      </>
   );
};

export default ClientLayout;
