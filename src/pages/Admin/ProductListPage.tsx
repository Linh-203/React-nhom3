import { useState, useEffect, useCallback } from 'react';
import SearchIcon from '../../assets/icons/SearchIcon';
import productService from '../../api/product';
import ProductTbaleItem from '../../components/ProductTableItem/ProductTableItem';
import { IProduct } from '../../common/product';
import { useDebounce } from '../../hooks/useDebounce';
import { usePaginate } from '../../hooks/usePaginate';

const ProductListPage = () => {
   const [item, setItem] = useState<IProduct[]>([]);
   const [key, setKey] = useState<string>('');
   const [totalPage, setTotalPage] = useState<number>(1);
   const finalKey = useDebounce<string>(key, 500);
   const { goToPage, nextPage, page, pageRange, prevPage } = usePaginate({ totalPages: totalPage });
   //Vì tôi còn dùng lại hàm này nữa
   const handleGetAllItem = async () => {
      const { data } = await productService.getAllProduct({ q: finalKey, limit: 6, page: page });
      setItem(data.data);
      setTotalPage(data.pagination.totalPages);
   };
   const resetProduct = useCallback(
      (id: string) => {
         const newProducts = item.filter((prd) => prd._id !== id);
         setItem(newProducts);
      },
      [item]
   );
   useEffect(() => {
      handleGetAllItem().catch((err) => console.log(err));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [finalKey, page]);
   return (
      <div>
         <div className='flex pb-4 justify-between items-center'>
            <h1 className='text-4xl font-bold'>Product List</h1>
            <div className='flex'>
               <input
                  type='search'
                  placeholder='search here...'
                  className='border-[1px] border-gray-300 rounded-l-2xl p-2 hover:border-black text-black outline-none'
                  onChange={(e) => setKey(e.target.value)}
               />
               <button className='border-[1px] bg-red-400 text-white hover:bg-red-500 px-3 border-gray-300 rounded-r-2xl'>
                  <SearchIcon />
               </button>
            </div>
         </div>
         <table className='text-left w-full my-5 rounded-t-2xl overflow-hidden'>
            <thead className='bg-navBg dark:bg-navDarkBg'>
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
               {item.length > 0 &&
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  item.map((prd, index) => (
                     <ProductTbaleItem prd={prd} index={index} key={index} resetProducts={resetProduct} />
                  ))}
            </tbody>
         </table>
         <div className='paginate flex gap-1 justify-end py-3'>
            <button className='rounded-2xl bg-navBg p-2 hover:bg-slate-400' onClick={() => prevPage()}>
               Prev
            </button>
            {pageRange.map((_: number, index: number) => (
               <button
                  key={index}
                  className={`rounded-2xl hover:bg-zinc-200 w-10 h-10 p-2 border-[1px] ${
                     page === index + 1 ? 'border-gray-500' : ''
                  }`}
                  onClick={() => goToPage(index + 1)}
               >
                  <span>{index + 1}</span>
               </button>
            ))}
            <button className='rounded-2xl bg-navBg p-2 hover:bg-slate-400' onClick={() => nextPage()}>
               Next
            </button>
         </div>
      </div>
   );
};

export default ProductListPage;
