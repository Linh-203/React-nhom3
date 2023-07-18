import { useState, useEffect } from 'react';
import SearchIcon from '../../assets/icons/SearchIcon';
import productService from '../../api/product';
import ProductTbaleItem from '../../components/ProductTableItem/ProductTableItem';
import { IProduct } from '../../common/product';
import { AxiosResponse } from 'axios';
import instance from '../../api/instance';

const ProductListPage = () => {
   const [item, setItem] = useState<IProduct[]>([]);
   const [pages, setPages] = useState<number>(1);
   const [itemToRender, setItemToRender] = useState<IProduct[]>([]);
   const [totalPages, setTotalPage] = useState<number[]>([]);
   const [itemPerpage] = useState(5);
   const [currentPage, setCurrentPage] = useState(1);

   const handleSearch = async (value: string) => {
      // const filter = item.filter((item) => item.name.toLowerCase().match(value.toLowerCase()));
      const searchResult: AxiosResponse<IProduct[], any> = await instance.get('/products?_q='+value)
      renderItemPerpage(searchResult.data);
   };

   const renderItemPerpage = (item: IProduct[]) => {
      setPages(Math.ceil(item.length / itemPerpage));
      setTotalPage(Array.from(Array(Math.ceil(item.length / itemPerpage)).keys()).map((page) => page + 1));
      const start = (currentPage - 1) * itemPerpage;
      const end = start + itemPerpage;
      setItemToRender(item.slice(start, end));
   };

   const nextPage = () => {
      if (currentPage < pages) {
         setCurrentPage((prev) => (prev += 1));
      }
   };

   const handleDeleteItem = async (id: string): Promise<void> => {
      await productService
         .deleteProduct(id)
         .then(() => {
            alert('Deleted product');
            getAllProducts().catch(() => {
               console.log('getAllProducts failed');
            });
         })
         .catch(() => {
            console.log('error deleting product');
         });
   };

   const prevPage = () => {
      if (currentPage > 1) {
         setCurrentPage((prev) => (prev -= 1));
      }
   };
   const changePage = (page: number) => {
      setCurrentPage(page);
   };

   const getAllProducts = async () => {
      const { data } = await productService.getAllProduct({});
      setItem(data.data);
   };

   useEffect(() => {
      renderItemPerpage(item);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [item, currentPage]);

   useEffect(() => {
      getAllProducts().catch(() => {
         console.log('getAllProducts failed');
      });
   }, []);
   console.log(itemToRender);

   return (
      <div>
         <div className='flex pb-4 justify-between items-center'>
            <h1 className='text-4xl font-bold'>Product List</h1>
            <div className='flex'>
               <input
                  type='search'
                  placeholder='search here...'
                  className='border-[1px] border-gray-300 rounded-l-2xl p-2 hover:border-black text-black outline-none'
                  onChange={(e) => handleSearch(e.target.value)}
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
               {itemToRender?.length > 0 &&
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  itemToRender?.map((prd, index) => <ProductTbaleItem deleteAction={handleDeleteItem} prd={prd} index={index} key={index} />)
               }
            </tbody>
         </table>
         <div className='paginate flex gap-1 justify-end py-3'>
            <button className='rounded-2xl bg-navBg p-2 hover:bg-slate-400' onClick={() => prevPage()}>
               Prev
            </button>
            {totalPages.map((_: number, index: number) => (
               <button
                  key={index}
                  className={`rounded-2xl hover:bg-zinc-200 w-10 h-10 p-2 border-[1px] ${
                     currentPage === index + 1 ? 'border-gray-500' : ''
                  }`}
                  onClick={() => changePage(index + 1)}
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
