import { createBrowserRouter } from 'react-router-dom';

import ClientLayout from '../layouts/ClientLayout';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage/ProductPage';
import AdminLayout from '../layouts/AdminLayout';
import DashBoard from '../pages/Admin/DashBoard';
import ProductListPage from '../pages/Admin/ProductListPage';
import CategoryListPage from '../pages/Admin/CategoryListPage';
import AddProduct from '../pages/Admin/AddProduct';
import AddCategory from '../pages/Admin/AddCategory';
import SearchContext from '../components/SearchContext/SearchContext';
import DetailProduct from '../pages/DetailProduct/DetailProduct';
import UpdateProduct from '../pages/Admin/UpdateProduct';
import UpdateCategory from '../pages/Admin/UpdateCategory';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Cart from '../pages/Cart/Cart';
import Orders from '../pages/Order/Orders';
import DetailOrder from '../pages/Order/order-detail/DetailOrder';
import OrderSuccessNotification from '../pages/OrderSuccsec';
import Checkout from '../pages/Cart/Checkout';
import ListOrders from '../pages/Admin/ListOrders';
import OrdersDetail from '../components/orders/OrdersDetail';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <ClientLayout />,
      children: [
         {
            path: '/',
            element: <HomePage />
         },
         {
            path: '/products',
            element: <ProductPage />
         },
         {
            path: 'search',
            element: <SearchContext />
         },
         {
            path: 'signup',
            element: <SignUp />
         },
         {
            path: 'login',
            element: <Login />
         },
         {
            path: '/products/:id',
            element: <DetailProduct />
         },
         {
            path: '/cart',
            element: <Cart />
         },
         {
            path: '/orders',
            element: <Orders />
         },
         {
            path: '/order/:id',
            element: <DetailOrder />
         },
         {
            path: '/message',
            element: <OrderSuccessNotification />
         },
         {
            path: '/checkout',
            element: <Checkout />
         }
      ]
   },
   {
      path: '/admin',
      element: <AdminLayout />,
      children: [
         {
            path: '',
            element: <DashBoard />
         },
         {
            path: 'dashboard',
            element: <DashBoard />
         },
         {
            path: 'products',
            element: <ProductListPage />
         },
         {
            path: 'product-add',
            element: <AddProduct />
         },
         {
            path: 'product-update/:id',
            element: <UpdateProduct />
         },
         {
            path: 'orders',
            element: <ListOrders />
         },
         {
            path: 'order/:id',
            element: <OrdersDetail />
         },
         {
            path: 'categories',
            element: <CategoryListPage />
         },
         {
            path: 'category-add',
            element: <AddCategory />
         },
         {
            path: 'category-edit/:id',
            element: <UpdateCategory />
         },
         {
            path: 'orders',
            element: <DashBoard />
         }
      ]
   }
]);
