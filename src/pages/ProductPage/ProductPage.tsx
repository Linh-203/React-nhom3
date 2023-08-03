import { useState, useEffect, useCallback } from 'react';

import LabelRed from '../../components/Label/LabelRed';
import Radios, { CheckBox } from './components/Radios';
import FilterAttribute from './components/FilterAttribute';
import ListProduct from './components/ListProduct';
import RangeInput from './components/RangeInput';
import { getAllCategory } from '../../api/category';
import { useDispatch, useSelector } from 'react-redux';
import { filterSlice } from '../../slices/FilterSlice';
import { allInfoSelector } from '../../slices/ProductSlice';
import DropFilter from './components/DropFilter';

const ProductPage = () => {
   const [categories, setCategories] = useState<Partial<CheckBox>[]>([]);
   const [maxPrice, setMaxPrice] = useState<number>(Number(localStorage.getItem('max')));
   const newSetMaxPrice = useCallback(() => setMaxPrice, []);
   const dispatch = useDispatch();
   const { amount, inStock, outStock } = useSelector(allInfoSelector);
   const handleResetPrice = useCallback(() => {
      dispatch(filterSlice.actions.setFromPrice(1));
      dispatch(filterSlice.actions.setToPrice(maxPrice));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [maxPrice]);
   const handleResetCate = useCallback(() => {
      dispatch(filterSlice.actions.setCate(''));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   const handleResetStock = useCallback(() => {
      dispatch(filterSlice.actions.setInStock(false));
      dispatch(filterSlice.actions.setOutStock(false));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   const fakeFilter: CheckBox[] = [
      {
         name: 'attribute',
         title: 'In stock',
         value: 'stock',
         quantity: inStock,
         handleCheck: () => {
            dispatch(filterSlice.actions.setInStock(true));
         },
         cancelCheck: () => {
            dispatch(filterSlice.actions.setInStock(false));
         }
      },
      {
         name: 'attribute',
         title: 'Out of stock',
         value: 'outstock',
         quantity: outStock,
         handleCheck: () => {
            dispatch(filterSlice.actions.setOutStock(true));
         },
         cancelCheck: () => {
            dispatch(filterSlice.actions.setOutStock(false));
         }
      }
   ];
   // eslint-disable-next-line react-hooks/exhaustive-deps

   useEffect(() => {
      void (async () => {
         try {
            const res = await getAllCategory();
            const cates = res.data.data;
            const checkBoxCategory: Partial<CheckBox>[] = cates.map((item) => ({
               value: item._id,
               title: item.name,
               name: 'category',
               quantity: item.products ? item.products.length : 0,
               handleCheck: () => {
                  dispatch(filterSlice.actions.setCate(item._id));
               },
               cancelCheck: () => {
                  dispatch(filterSlice.actions.setCate(''));
               }
            }));
            setCategories(checkBoxCategory);
         } catch (error) {
            console.log(error);
         }
      })();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   return (
      <div className='min-h-[100vh] w-full bg-primaryBg pb-10'>
         {/* <div>Breadcrumb</div> */}
         <section className='w-full pt-20 flex justify-center gap-10'>
            <article className='w-[20%] flex flex-col'>
               <FilterAttribute label='Filter'>
                  <p className='text-grayLight200 mt-5'>{amount} products</p>
               </FilterAttribute>

               <FilterAttribute label='Availability'>
                  <Radios checkboxs={fakeFilter} handleReset={handleResetStock} />
               </FilterAttribute>

               <FilterAttribute label='Price'>
                  <RangeInput max={maxPrice} min={1} step={1} handleReset={handleResetPrice} />
               </FilterAttribute>

               <FilterAttribute label='Product Type'>
                  <Radios checkboxs={categories} handleReset={handleResetCate} />
               </FilterAttribute>
            </article>
            <main className='sm:w-[60%] lg:w-[50%]'>
               <LabelRed>All Products</LabelRed>
               <img
                  src='https://spacingtech.com/html/tm/freozy/freezy-ltr/image/collection/collection-banner.jpg'
                  alt='banner'
                  className='object-cover rounded-lg  mt-5'
               />
               <article className='flex justify-between items-center w-full mt-10'>
                  <p>Type</p>
                  <DropFilter />
               </article>
               <hr className='h-[1px] bg-grayLight100 mt-5' />
               <ListProduct setMaxPrice={newSetMaxPrice} />
            </main>
         </section>
      </div>
   );
};

export default ProductPage;
