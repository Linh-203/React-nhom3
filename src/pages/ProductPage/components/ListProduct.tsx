import React, { useState, useEffect } from 'react';
import { IPaginate, IProduct, ResponsePaginate } from '../../../common/product';
import { IQuery } from '../../../api/product';
import CardProduct from '../../../components/CardProduct/CardProduct';
import Paginate from '../../../components/Paginate/Paginate';
import { usePaginate } from '../../../hooks/usePaginate';
import { allQuerySelector } from '../../../slices/FilterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { allInfoSelector, fetchProduct, productsSelector } from '../../../slices/ProductSlice';
import { AppDispatch } from '../../../store/store';
import Loading from '../../../components/Loading/Loading';
import Popup from '../../../components/Popup/Popup';
import Message from '../../../components/Message/Message';

const ListProduct = React.memo(() => {
   const products = useSelector(productsSelector);
   const filters = useSelector(allQuerySelector);
   const { loading, error } = useSelector(allInfoSelector);
   const dispatch = useDispatch<AppDispatch>();
   const [paginate, setPaginate] = useState<IPaginate>({ totalItems: 0, totalPages: 0, currentPage: 1 });
   const { pageRange, nextPage, prevPage, goToPage, page } = usePaginate({
      totalPages: paginate?.totalPages
   });
   useEffect(() => {
      void (async () => {
         try {
            const res = await dispatch(
               fetchProduct({
                  page: filters.page,
                  from: filters.fromPrice,
                  to: filters.toPrice,
                  limit: filters.limit,
                  cate: filters.cate,
                  order: filters.order,
                  sort: filters.sort,
                  outStock: filters.outStock,
                  inStock: filters.inStock
               } as IQuery)
            );
            const action = res.payload as ResponsePaginate<IProduct[]>;
            setPaginate(action.pagination);
         } catch (error) {
            console.log(error);
         }
      })();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [page, filters]);
   if (products.length === 0)
      return <div className='text-center text-grayLight200 font-semibold mt-20 text-lg'>Not found products</div>;
   if (loading) return <Loading />;
   return (
      <div className='mt-5 relative'>
         {error.content !== '' && <Message msg={error.content} type={error.type} duration={2000} />}
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
