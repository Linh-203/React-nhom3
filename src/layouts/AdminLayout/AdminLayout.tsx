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
   return (
      <div className='h-full w-full bg-primaryBg'>
         <AdminSideBar isMenuActive={menuState} />
         <div className={`min-h-screen rounded-3xl transition-all ${menuState ? 'ml-[280px]' : 'ml-0'}`}>
            <AdminHeader toggleMenu={toggleMenu} />
            <div className='bg-sectionBg min-h-screen p-2 drop-shadow-2xl rounded-3xl'>
               <Outlet />
            </div>
         </div>
      </div>
   );
}

export default AdminLayout;
