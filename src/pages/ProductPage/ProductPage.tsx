import { useState, useEffect } from 'react';
import { ICategory } from '../../common/category';

import LabelRed from '../../components/Label/LabelRed';
import CheckBoxs, { CheckBox } from './components/CheckBoxs';
import FilterAttribute from './components/FilterAttribute';
import ListProduct from './components/ListProduct';
import RangeInput from './components/RangeInput';
import { getAllCategory } from '../../api/category';
const fakeFilter: CheckBox[] = [
   {
      name: 'attribute',
      title: 'In stock',
      value: 'stock',
      quantity: 2
   },
   {
      name: 'attribute',
      title: 'Out of stock',
      value: 'outstock',
      quantity: 2
   }
];

const ProductPage = () => {
   const [categories, setCategories] = useState<CheckBox[]>([]);
   useEffect(() => {
      void (async () => {
         try {
            const res = await getAllCategory();
            const cates = res.data.data;
            const checkBoxCategory: CheckBox[] = cates.map((item) => ({
               value: item._id,
               title: item.name,
               name: 'category',
               quantity: item.products ? item.products.length : 0
            }));
            setCategories(checkBoxCategory);
         } catch (error) {
            console.log(error);
         }
      })();
   }, []);
   return (
      <div className='min-h-[100vh] w-full bg-primaryBg'>
         <div>Breadcrumb</div>
         <section className='w-full pt-20 flex justify-center gap-10'>
            <article className='w-[20%] flex flex-col'>
               <FilterAttribute label='Filter' type='text'>
                  <p className='text-grayLight200 mt-5'>23 products</p>
               </FilterAttribute>

               <FilterAttribute type='checkbox' label='Availability'>
                  <CheckBoxs checkboxs={fakeFilter} />
               </FilterAttribute>

               <FilterAttribute label='Price' type='range'>
                  <RangeInput max={100} min={1} step={1} />
               </FilterAttribute>

               <FilterAttribute label='Product Type' type='checkbox'>
                  <CheckBoxs checkboxs={categories} />
               </FilterAttribute>
            </article>
            <main className='sm:w-[60%] lg:w-[55%]'>
               <LabelRed>All Products</LabelRed>
               <img
                  src='https://spacingtech.com/html/tm/freozy/freezy-ltr/image/collection/collection-banner.jpg'
                  alt='banner'
                  className='object-cover rounded-lg  mt-5'
               />
               <article className='flex justify-between items-center w-full mt-10'>
                  <p>Type</p>
                  <div>
                     <p className='font-semibold'>
                        Sort by: <span className='text-grayLight200 font-normal'>Drop down</span>
                     </p>
                  </div>
               </article>
               <hr className='h-[1px] bg-grayLight100 mt-5' />
               <ListProduct />
            </main>
         </section>
      </div>
   );
};

export default ProductPage;
