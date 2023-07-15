import { useState } from 'react';
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
   const [togglePopup, setTogglePopup] = useState<boolean>(false);
   const handleToggleMenu = () => props.toggleMenu();

   return (
      <div className='flex px-2 rounded-3xl w-full h-16 bg-white items-center mb-[24px] justify-between drop-shadow-lg'>
         <button onClick={() => handleToggleMenu()} className='p-2 rounded-full hover:bg-[rgba(0,0,0,0.2)]'>
            <MenuIcon height='20' width='20' />
         </button>
         <div className='flex justify-around items-center w-64'>
            <button className='p-2 rounded-full hover:bg-[rgba(0,0,0,0.2)]'>
               <EmailIcon height='20' width='20' />
            </button>
            <button className='p-2 rounded-full hover:bg-[rgba(0,0,0,0.2)]'>
               <BellIcon height='20' width='20' />
            </button>
            <div className='relative w-40'>
               <div onClick={() => setTogglePopup((prev) => !prev)} className='hover:bg-primaryBg px-1 rounded-2xl w-full flex justify-between items-center h-12 gap-1 overflow-hidden'>
                  <div className='rounded-full w-10 h-10 overflow-hidden'><img className='m-full h-full object-cover' src={images.user} alt='' /></div>
                  <p className='w-[75%] text-ellipsis overflow-hidden whitespace-nowrap text-black'>DevidMonster</p>
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
