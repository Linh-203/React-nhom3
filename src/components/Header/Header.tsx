/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import styles from './header.module.css';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import GlassIcon from '../../assets/icons/GlassIcon';
import HeartIcon from '../../assets/icons/HeartIcon';
import User from '../../assets/icons/User';
import CartIcon from '../../assets/icons/CartIcon';
import { useEffect, useRef, useState } from 'react';
import { useGetCartQuery } from '../../api-slice/baseCartAPI';
import { Badge, Dropdown } from 'antd';

import { useLogout } from '../../hooks/useLogout';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { itemsClientMenu } from './constans/itemDropdown';
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
   const logout = useLogout();
   const user = useSelector((state: RootState) => {
      return state.authReducer.user;
   });
   const token = useSelector((state: RootState) => state.authReducer.token);
   const [searchKeyword, setSearchKeyword] = useState('');
   const [historyPosition, setHistoryPosition] = useState<number>(0);
   const location = useLocation();
   const navigate = useNavigate();
   const userId = useSelector((state: RootState) => state.authReducer.user._id);
   const { data } = useGetCartQuery(userId, { skip: !userId });
   const [path, setPath] = useState<string>('');
   const headerRef = useRef<HTMLElement>(null);
   useEffect(() => {
      setPath(location.pathname);
   }, [location.pathname]);
   useEffect(() => {
      function handleScroll() {
         const pos = window.pageYOffset || document.documentElement.scrollTop;
         if (headerRef.current) {
            if (pos > historyPosition) {
               headerRef.current.classList.add('-top-[120px]');
               headerRef.current.classList.remove('top-0');
               headerRef.current.classList.remove('shadow-lg');
            } else {
               headerRef.current.classList.add('top-0');
               headerRef.current.classList.add('shadow-lg');
               headerRef.current.classList.remove('-top-[120px]');
            }
            if (pos === 0) {
               headerRef.current.classList.remove('shadow-lg');
            }
            pos === 0 && headerRef.current.classList.remove('shadow-md', 'shadow-black');
         }
         setHistoryPosition(pos);
      }
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   });
   const handleSearchInputChange = (event: Event) => {
      if (event.target) setSearchKeyword(event.target.value);
   };

   const handleSearchSubmit = (event: Event) => {
      event.preventDefault();
      const searchParams = new URLSearchParams();
      searchParams.append('q', searchKeyword);
      navigate({
         pathname: 'search',
         search: searchParams.toString()
      });
   };
   const handleClick = async () => {
      await logout();
      navigate('/');
   };
   const items = itemsClientMenu(handleClick);
   return (
      <header className={`${styles['header']} bg-white`} ref={headerRef}>
         <Link to={'/'} className='w-[20%]'>
            <img
               src='https://spacingtech.com/html/tm/freozy/freezy-ltr/image/logo/logo.png'
               alt='logo'
               className='aspect-[3/1] w-[50%]'
            />
         </Link>
         <nav className='w-[30%]'>
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
         <div className='w-[60%] flex justify-end items-center gap-8'>
            <div className='flex justify-between items-center gap-1 text-colorText  cursor-pointer '>
               <form onSubmit={handleSearchSubmit} className='flex justify-center items-center'>
                  {/* <GlassIcon width='1.3rem' height='1.3rem' /> */}
                  <input
                     type='text'
                     className='hover:text-hightLigh outline-none focus:border-b-[1px] focus:border-b-grayLight100 mr-4 text-hightLigh'
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
            <Link to='/cart'>
               <Badge count={data?.cart?.products?.length} color='#d2401e' offset={[1, 2]} size='small'>
                  <CartIcon width='1.3rem' height='1.3rem' className='cursor-pointer hover:text-hightLigh' />
               </Badge>
            </Link>
            {token === '' ? (
               <Link to={'/login'}>
                  <User width='1.3rem' height='1.3rem' className='cursor-pointer hover:text-hightLigh' />
               </Link>
            ) : (
               <div className='w-[5%] h-full'>
                  <Dropdown placement='bottom' menu={{ items }}>
                     <img src={user.avatar} className='w-[60%] aspect-square rounded-full cursor-pointer' />
                  </Dropdown>
               </div>
            )}
         </div>
      </header>
   );
};

export default Header;
