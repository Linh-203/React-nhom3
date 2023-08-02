import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const ClientLayout = () => {
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
