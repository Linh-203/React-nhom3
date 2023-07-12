import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ClientLayout from './layouts/ClientLayout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

const router = createBrowserRouter([
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
   }
]);
function App() {
   return <RouterProvider router={router} />;
}

export default App;
