import BellIcon from '../../assets/icons/BellIcon';
import EmailIcon from '../../assets/icons/EmailIcon';
import MenuIcon from '../../assets/icons/MenuIcon';
import images from '../../assets/images';

type IProps = {
   toggleMenu(): void;
};

function AdminHeader(props: IProps) {
   const handleToggleMenu = () => props.toggleMenu();

   return (
        <div className='flex px-2 w-full h-16 bg-gray-200 items-center justify-between drop-shadow-lg'>
            <button onClick={() => handleToggleMenu()} className='p-2 rounded-full hover:bg-gray-400'>
                <MenuIcon height='20' width='20'/>
            </button>
            <div className='flex justify-around items-center w-56'>
                <button className='p-2 rounded-full hover:bg-gray-400'>
                    <EmailIcon height='20' width='20'/>
                </button>
                <button className='p-2 rounded-full hover:bg-gray-400'>
                    <BellIcon height='20' width='20'/>
                </button>
                <div className='rounded-full w-10 h-10 overflow-hidden border-black border-2'>
                    <img className='m-full h-full object-cover' src={images.user} alt="" />
                </div>
            </div>
        </div>
   );
}

export default AdminHeader;
