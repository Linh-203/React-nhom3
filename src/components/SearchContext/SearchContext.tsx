import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import productService from '../../api/product';
import { IProduct } from '../../common/product';
import CardProduct from '../../components/CardProduct/CardProduct';

const SearchContext = () => {
   const location = useLocation();
   const searchValue = new URLSearchParams(location.search).get('q');
   const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);
   useEffect(() => {
      productService
         .getAllProduct({ q: searchValue! })
         .then(({ data }) => {
            setProducts(data.data);
         })
         .catch(({ response }) => {
            alert(response.data.message);
         });
   }, [searchValue]);

   return (
      <div className='p-10'>
         {searchValue && <h1>Sản phẩm bạn vừa tìm kiếm: {searchValue}</h1>}
         {products.length > 0 ? (
            <div className='flex flex-col justify-start gap-3 items-center max-h-[800px] p-5 overflow-auto'>
               {products.map((item, index) => (
                  <Link
                     to={`/products/${item._id}`}
                     className='flex justify-start gap-3 w-full items-center'
                     key={index}
                  >
                     <img src={item.images[0].url} className='w-[20%] aspect-square rounded-lg' />
                     <div className='font-semibold '>
                        <Link to={`/products/${item._id}`} className='text-grayLight200 text-lg font-semibold'>
                           {item.name}
                        </Link>
                        <p className='text-greenCus font-semibold'>${item.price}</p>
                        <p className='text-grayLight100'>{item.desc}</p>
                     </div>
                  </Link>
               ))}
            </div>
         ) : (
            <p className='not-found-text font-semibold text-lg'>Not found products!</p>
         )}
      </div>
   );
};

export default SearchContext;
