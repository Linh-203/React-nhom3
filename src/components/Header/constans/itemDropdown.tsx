import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom';

export const itemsClientMenu = (logout: () => void): MenuProps['items'] => [
   {
      key: '1',
      label: (
         <Link to={'/user'}>
            <p>Your Profile</p>
         </Link>
      )
   },
   {
      key: '2',
      label: (
         <Link to={'/orders'}>
            <p>Your Orders</p>
         </Link>
      )
   },
   {
      key: '3',
      label: (
         <p onClick={logout}>
            <span>Log out</span>
         </p>
      )
   }
];
