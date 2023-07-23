import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import AdminSideBar from '../../components/AdminSideBar';
import AdminHeader from '../../components/AdminHeader';
//cho ai không dùng tailwind thì import file css
//import styles from './AdminLayout.module.css';

function AdminLayout() {
   const [menuState, setMenuState] = useState(true);

   const toggleMenu = () => {
      setMenuState((prev) => !prev);
   };
   //bg-primaryBg dark:bg-gradient-to-r dark:from-[#4B79A1] dark:to-[#283E51]
   return (
      <div className='transition-all h-full p-3 w-full dark:bg-primaryDarkBg'>
         <AdminSideBar isMenuActive={menuState} />
         <div className={`min-h-screen rounded-xl transition-all ${menuState ? 'ml-[270px]' : 'ml-0'}`}>
            <AdminHeader toggleMenu={toggleMenu} />
            <div className='transition-all  min-h-screen px-4 py-5 dark:text-white rounded-2xl'>
               <Outlet />
            </div>
         </div>
      </div>
   );
}

export default AdminLayout;
