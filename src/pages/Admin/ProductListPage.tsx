import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchIcon from '../../assets/icons/SearchIcon';
import ProductDetail from './ProductDetail';

const ProductListPage = () => {
   const [idItem, setIdItem] = useState<string>("")
   const handleChangeId = (id: string) => {
      setIdItem(id)
   }
   const clearId = () => {
      setIdItem('')
   }
   return (
      <div>
         {idItem !== "" ? <ProductDetail id={idItem} setID={clearId}></ProductDetail> : ""} 
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
               <tr className='active:bg-primaryBg border-b-[1px] border-gray-400 h-[160px]'>
                  <th className='p-2' scope='col'>
                     1
                  </th>
                  <th className='p-2' scope='col'>
                     <img src={'https://picsum.photos/300/200'} className='w-52 h-36 mx-auto' alt='' />
                  </th>
                  <th className='p-2' scope='col'>
                     Potato
                  </th>
                  <th className='p-2' scope='col'>
                     $1.00
                  </th>
                  <th className='p-2' scope='col'>
                     1000
                  </th>
                  <th className='p-2 flex gap-2 justify-center items-center h-[160px]' scope='col'>
                     <button onClick={() => handleChangeId("64b1638b211876a5918a345c")} 
                        className='p-2 rounded-xl bg-green-400 hover:bg-green-500 text-[15px] text-white'
                     >
                        Detail
                     </button>
                     {/* <Link
                        className='p-2 rounded-xl bg-blue-400 hover:bg-blue-500 text-[15px] text-white'
                        to='/admin/products'
                     >
                        Update
                     </Link>
                     <button className='p-2 rounded-xl bg-red-400 hover:bg-red-500 text-[15px] text-white'>
                        Delete
                     </button> */}
                  </th>
               </tr>
               {/* {order?.map((item, index) => (
                     <tr key={index} className='border-b-[1px] border-gray-400'>
                        <th className='p-2' scope='col'>
                           {item.id}
                        </th>
                        <th className='p-2' scope='col'>
                           {item.orderName}
                        </th>
                        <th className='p-2' scope='col'>
                           {item.customerName}
                        </th>
                        <th className='p-2' scope='col'>
                           {item.Location}
                        </th>
                        <th className='p-2' scope='col'>
                           {item.orderStatus}
                        </th>
                        <th className='p-2' scope='col'>
                           {item.deliveredTime}
                        </th>
                        <th className='p-2' scope='col'>
                           {item.price}
                        </th>
                     </tr>
                  ))} */}
            </tbody>
         </table>
      </div>
   );
};

export default ProductListPage;
