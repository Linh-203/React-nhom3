import React, { useState, useEffect } from 'react';
import { IProduct, IPaginate } from '../../../common/product';
import productService from '../../../api/product';
import CardProduct from '../../../components/CardProduct/CardProduct';
import Paginate from '../../../components/Paginate/Paginate';
import { usePaginate } from '../../../hooks/usePaginate';
import { allQuerySelector } from '../../../slices/FilterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { productSlice } from '../../../slices/ProductSlice';

type Props = {
   setMaxPrice: (n: number) => void;
};
const ListProduct = React.memo(({ setMaxPrice }: Props) => {
   const [products, setProducts] = useState<IProduct[]>([]);
   console.log(products);
   const filters = useSelector(allQuerySelector);
   const dispatch = useDispatch();
   const [paginate, setPaginate] = useState<IPaginate>({ totalItems: 0, totalPages: 0, currentPage: 1 });
   const { pageRange, nextPage, prevPage, goToPage, page } = usePaginate({
      curPage: paginate?.currentPage,
      totalPages: paginate?.totalPages
   });
   useEffect(() => {
      void (async () => {
         try {
            const res = await productService.getAllProduct({
               page: filters.page,
               from: filters.fromPrice,
               to: filters.toPrice,
               limit: filters.limit,
               cate: filters.cate,
               order: filters.order,
               sort: filters.sort,
               outStock: filters.outStock,
               inStock: filters.inStock
            });
            setProducts(res.data.data);
            setPaginate(res.data.pagination);
            setMaxPrice(res.data.maxPrice);
            dispatch(productSlice.actions.setAmount(res.data.pagination.totalItems));
            dispatch(productSlice.actions.setInStock(res.data.inStock));
            dispatch(
               productSlice.actions.setOutStock(
                  res.data.pagination.totalItems - res.data.inStock > 0
                     ? res.data.pagination.totalItems - res.data.inStock
                     : 0
               )
            );
            localStorage.setItem('max', JSON.stringify(res.data.maxPrice));
         } catch (error) {
            console.log(error);
         }
      })();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [page, filters]);
   if (products.length === 0)
      return <div className='text-center text-grayLight200 font-semibold mt-20 text-lg'>Not found products</div>;
   return (
      <div className='mt-5'>
         <section className='grid grid-cols-3 gap-8 '>
            {products?.map((item) => (
               <CardProduct product={item} link={`/products/${item._id}`} key={item._id} />
            ))}
         </section>
         {products?.length > 0 && (
            <Paginate
               pageRange={pageRange}
               nextPage={nextPage}
               prevPage={prevPage}
               curPage={page}
               goToPage={goToPage}
            />
         )}
      </div>
   );
});

export default ListProduct;
