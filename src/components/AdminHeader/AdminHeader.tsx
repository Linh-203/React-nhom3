import { useState } from 'react';
import BellIcon from '../../assets/icons/BellIcon';
import EmailIcon from '../../assets/icons/EmailIcon';
import MenuIcon from '../../assets/icons/MenuIcon';
import images from '../../assets/images';
import SignOutIcon from '../../assets/icons/SingOutIcon';

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
         <div className='flex justify-around items-center w-56'>
            <button className='p-2 rounded-full hover:bg-[rgba(0,0,0,0.2)]'>
               <EmailIcon height='20' width='20' />
            </button>
            <button className='p-2 rounded-full hover:bg-[rgba(0,0,0,0.2)]'>
               <BellIcon height='20' width='20' />
            </button>
            <div className='relative'>
               <div onClick={() => setTogglePopup((prev) => !prev)} className='rounded-full w-10 h-10 overflow-hidden'>
                  <img className='m-full h-full object-cover' src={images.user} alt='' />
               </div>
               {!togglePopup ? (
                  <div className='my-2 rounded-lg py-3 absolute drop-shadow-2xl bg-white w-28 z-500 right-0'>
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
