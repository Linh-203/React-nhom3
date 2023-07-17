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
import UpdateProduct from '../pages/Admin/UpdateProduct';

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
            path: 'categories',
            element: <CategoryListPage />
         },
         {
            path: 'category-add',
            element: <AddCategory />
         }
      ]
   }
]);
