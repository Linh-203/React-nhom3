import styles from './header.module.css';
import { Link, NavLink } from 'react-router-dom';
import GlassIcon from '../../assets/icons/GlassIcon';
import HeartIcon from '../../assets/icons/HeartIcon';
import CartIcon from '../../assets/icons/CartIcon';

type NavLink = {
   path: string;
   title: string;
   children?: NavLink[];
};
const navItems: NavLink[] = [
   {
      path: '/',
      title: 'Home'
   },
   {
      path: '/products',
      title: 'Products'
   },
   {
      path: '/about',
      title: 'About Us'
   }
];
const Header = () => {
   return (
      <header className={`${styles['header']}`}>
         <div className='w-[20%]'>
            <img
               src='https://spacingtech.com/html/tm/freozy/freezy-ltr/image/logo/logo.png'
               alt='logo'
               className='aspect-[3/1] w-[50%]'
            />
         </div>
         <nav className='w-[60%]'>
            <ul className='w-full flex justify-stretch items-center gap-8'>
               {navItems.map((item, index) => (
                  <li
                     className={`font-semibold text-[1.3rem] text-colorText hover:text-hightLigh text-center ${
                        window.location.pathname === item.path ? 'text-hightLigh' : 'text-colorText'
                     }`}
                     key={index}
                  >
                     <Link to={item.path}>{item.title}</Link>
                  </li>
               ))}
            </ul>
         </nav>
         <div className='w-[25%] flex justify-end items-center gap-8'>
            <div className='flex items-center gap-1 text-colorText hover:text-hightLigh cursor-pointer'>
               <GlassIcon width='1.3rem' height='1.3rem' />
               <span className=''>Find our item</span>
            </div>
            <HeartIcon width='1.3rem' height='1.3rem' className='cursor-pointer hover:text-hightLigh' />
            <CartIcon width='1.3rem' height='1.3rem' className='cursor-pointer hover:text-hightLigh' />
         </div>
      </header>
   );
};

export default Header;
