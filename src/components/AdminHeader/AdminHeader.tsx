import { useState, useEffect } from 'react';
import BellIcon from '../../assets/icons/BellIcon';
import EmailIcon from '../../assets/icons/EmailIcon';
import MenuIcon from '../../assets/icons/MenuIcon';
import images from '../../assets/images';
import SignOutIcon from '../../assets/icons/SingOutIcon';
import SettingIcon from '../../assets/icons/SettingIcon';

type IProps = {
   toggleMenu(): void;
};

function AdminHeader(props: IProps) {
   const [theme, setTheme] = useState<string>('light')
   const [togglePopup, setTogglePopup] = useState<boolean>(false);
   const handleToggleMenu = () => props.toggleMenu();

   useEffect(() => {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        setTheme('dark');
      }
      else {
        setTheme('light');
      }
    }, [])

   useEffect(() => {
      if(theme === 'dark') {
         document.documentElement.classList.add('dark');
      } else {
         document.documentElement.classList.remove('dark');}
   }, [theme])

   return (
      <div className='transition-all flex px-2 rounded-xl w-full h-16 bg-white dark:bg-sectionDarkBg items-center mb-[24px] justify-between drop-shadow-lg'>
         <button onClick={() => handleToggleMenu()} className='dark:hover:bg-navDarkBg dark:text-white p-2 rounded-full hover:bg-[rgba(0,0,0,0.2)]'>
            <MenuIcon height='20' width='20' />
         </button>
         <div className='flex justify-around items-center w-72'>
            <button onClick={() => setTheme(prev => prev === 'light'? 'dark': 'light')} className='hover:bg-navBg dark:hover:bg-navBg p-2 w-10 h-10 rounded-full bg-[rgba(0,0,0,0.2)] dark:bg-primaryBg transition-all'>
               {theme === 'light'?"☀️" :"🌑"}
            </button>
            <button className='p-2 rounded-full hover:bg-[rgba(0,0,0,0.2)] dark:hover:bg-navDarkBg dark:text-white'>
               <EmailIcon height='20' width='20' />
            </button>
            <button className='p-2 rounded-full hover:bg-[rgba(0,0,0,0.2)] dark:hover:bg-navDarkBg dark:text-white'>
               <BellIcon height='20' width='20' />
            </button>
            <div className='relative w-40'>
               <div onClick={() => setTogglePopup((prev) => !prev)} className='hover:bg-primaryBg  dark:hover:bg-navDarkBg px-1 rounded-2xl w-full flex justify-between items-center h-12 gap-1 overflow-hidden'>
                  <div className='rounded-full w-10 h-10 overflow-hidden'><img className='m-full h-full object-cover' src={images.user} alt='' /></div>
                  <p className='w-[75%] text-ellipsis overflow-hidden whitespace-nowrap text-black dark:text-white'>DevidMonster</p>
               </div>
               {togglePopup ? (
                  <div className='my-2 rounded-lg py-2 absolute drop-shadow-2xl bg-white w-28 z-500 right-0'>
                     <button className='flex p-2 w-full gap-1 items-center hover:bg-primaryBg'>
                        <SettingIcon /> Setting
                     </button>
                     <button className='flex p-2 w-full gap-1 items-center hover:bg-primaryBg'>
                        <SignOutIcon /> Logout
                     </button>
                  </div>
               ) : (
                  ''
               )}
            </div>
         </div>
      </div>
   );
}

export default AdminHeader;
