import React, { useState, useEffect } from 'react';
import { IProduct, IPaginate } from '../../../common/product';
import productService from '../../../api/product';
import CardProduct from '../../../components/CardProduct/CardProduct';
import Paginate from '../../../components/Paginate/Paginate';
import { usePaginate } from '../../../hooks/usePaginate';

const ListProduct = React.memo(() => {
   const [products, setProducts] = useState<IProduct[]>([]);
   const [paginate, setPaginate] = useState<IPaginate>({ totalItems: 0, totalPages: 0, currentPage: 1 });
   const { pageRange, nextPage, prevPage, goToPage, page } = usePaginate({
      curPage: paginate.currentPage,
      totalPages: paginate.totalPages
   });
   useEffect(() => {
      void (async () => {
         try {
            const res = await productService.getAllProduct({ limit: 6, page });
            setProducts(res.data.data);
            setPaginate(res.data.pagination);
         } catch (error) {
            console.log(error);
         }
      })();
   }, [page]);
   return (
      <div className='mt-5'>
         <section className='grid grid-cols-3 gap-8 '>
            {products.map((item) => (
               <CardProduct product={item} link={`/products/${item._id}`} key={item._id} />
            ))}
         </section>
         <Paginate pageRange={pageRange} nextPage={nextPage} prevPage={prevPage} curPage={page} goToPage={goToPage} />
      </div>
   );

   
});

export default ListProduct;
