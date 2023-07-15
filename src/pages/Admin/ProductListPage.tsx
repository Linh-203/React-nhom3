import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchIcon from '../../assets/icons/SearchIcon';
import ProductDetail from './ProductDetail';
import productService from '../../api/product';

const ProductListPage = () => {
   const [idItem, setIdItem] = useState<string>('');
   const [item, setItem] = useState<any[]>([])
   const handleChangeId = (id: string) => {
      setIdItem(id);
   };
   const clearId = () => {
      setIdItem('');
   };

   const getAllProducts = async () => {
      const res = await productService.getAllProduct();
      setItem(res.data);
   };
   useEffect(() => {
      getAllProducts().catch(() => {
         console.log('getAllProducts failed');
      });
   }, []);
   return (
      <div>
         <ProductDetail id={idItem} setID={clearId}></ProductDetail>
         <div className='flex pb-4 justify-between items-center'>
            <h1 className='text-4xl font-bold'>Product List</h1>
            <div className='flex'>
               <input
                  type='search'
                  placeholder='search here...'
                  className='border-[1px] border-gray-300 rounded-l-2xl p-2 hover:border-black outline-none'
               />
               <button className='border-[1px] bg-red-400 text-white hover:bg-red-500 px-3 border-gray-300 rounded-r-2xl'>
                  <SearchIcon />
               </button>
            </div>
         </div>
         <table className='text-left w-full my-5 rounded-t-2xl overflow-hidden'>
            <thead className='bg-navBg'>
               <tr className=''>
                  <th className='p-2' scope='col'>
                     ID
                  </th>
                  <th className='p-2 text-center' scope='col'>
                     Image
                  </th>
                  <th className='p-2' scope='col'>
                     Product Name
                  </th>
                  <th className='p-2' scope='col'>
                     Price
                  </th>
                  <th className='p-2' scope='col'>
                     Quantity
                  </th>
                  <th className='p-2 text-center' scope='col'>
                     Action
                  </th>
               </tr>
            </thead>
            <tbody>
               {item.length > 0 && item?.map((prd, index) => (
                  <tr key={index} className='active:bg-primaryBg border-b-[1px] border-gray-400 h-[160px]'>
                     <th className='p-2' scope='col'>
                        {index + 1}
                     </th>
                     <th className='p-2' scope='col'>
                        <img src={prd!.images[0]!.url} className='rounded-2xl w-52 h-36 mx-auto' alt='' />
                     </th>
                     <th className='p-2' scope='col'>
                        {prd.name}
                     </th>
                     <th className='p-2' scope='col'>
                        {prd.price}
                     </th>
                     <th className='p-2' scope='col'>
                        {prd.stock}
                     </th>
                     <th className='p-2 flex gap-2 justify-center items-center h-[160px]' scope='col'>
                        <button
                           onClick={() => handleChangeId(prd._id)}
                           className='p-2 rounded-xl bg-green-400 hover:bg-green-500 text-[15px] text-white'
                        >
                           Detail
                        </button>
                        <Link
                           className='p-2 rounded-xl bg-blue-400 hover:bg-blue-500 text-[15px] text-white'
                           to='/admin/products'
                        >
                           Update
                        </Link>
                        <button className='p-2 rounded-xl bg-red-400 hover:bg-red-500 text-[15px] text-white'>
                           Delete
                        </button>
                     </th>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default ProductListPage;
