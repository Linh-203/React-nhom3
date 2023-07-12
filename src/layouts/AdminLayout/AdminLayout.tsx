import { Outlet } from "react-router-dom";
import { useState } from 'react'
import AdminSideBar from "../../components/AdminSideBar";
import AdminHeader from "../../components/AdminHeader";
//cho ai không dùng tailwind thì import file css
//import styles from './AdminLayout.module.css';

function AdminLayout() {
    const [menuState, setMenuState] = useState(true)

    const toggleMenu = () => {
        setMenuState(prev => !prev)
    }
    return <div className="h-full w-full">
        <AdminSideBar isMenuActive={menuState}/>
        <div className={`min-h-screen transition-all ${menuState?'ml-64':'ml-0'}`}>
            <AdminHeader toggleMenu={toggleMenu}/>
            <Outlet/>
        </div>
    </div>;
}

export default AdminLayout;