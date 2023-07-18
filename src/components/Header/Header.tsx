import styles from './header.module.css';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import GlassIcon from '../../assets/icons/GlassIcon';
import HeartIcon from '../../assets/icons/HeartIcon';
import CartIcon from '../../assets/icons/CartIcon';
import { useEffect, useRef, useState } from 'react';

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
   const [searchKeyword, setSearchKeyword] = useState('');
   const location = useLocation();
   const navigate = useNavigate();
   const [path, setPath] = useState<string>('');
   const headerRef = useRef(null);
   useEffect(() => {
      setPath(location.pathname);
   }, [location.pathname]);

   const handleSearchInputChange = (event: any) => {
      setSearchKeyword(event.target.value);
   };

   const handleSearchSubmit = (event: any) => {
      event.preventDefault();
      const searchParams = new URLSearchParams();
      searchParams.append('', searchKeyword);
      navigate({
         pathname: 'search',
         search: searchParams.toString()
      });
   };
   return (
      //get height of header
      // listen window scroll
      //set history of each time scroll
      // smaller than history -> up -> fixed header
      // contrary
      <header className={`${styles['header']}`} ref={headerRef}>
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
                        path === item.path ? 'text-hightLigh' : 'text-colorText'
                     }`}
                     key={index}
                  >
                     <Link to={item.path}>{item.title}</Link>
                  </li>
               ))}
            </ul>
         </nav>
         <div className='w-[25%] flex justify-end items-center gap-8'>
            <div className='flex items-center gap-1 text-colorText  cursor-pointer'>
               <form onSubmit={handleSearchSubmit}>
                  {/* <GlassIcon width='1.3rem' height='1.3rem' /> */}
                  <input
                     type='text'
                     className='hover:text-hightLigh'
                     value={searchKeyword}
                     onChange={handleSearchInputChange}
                     placeholder='Tìm kiếm'
                  />
                  <button type='submit'>
                     <GlassIcon width='1.3rem' height='1.3rem' />
                  </button>
               </form>
            </div>
            <HeartIcon width='1.3rem' height='1.3rem' className='cursor-pointer hover:text-hightLigh' />
            <CartIcon width='1.3rem' height='1.3rem' className='cursor-pointer hover:text-hightLigh' />
         </div>
      </header>
   );
};

export default Header;
