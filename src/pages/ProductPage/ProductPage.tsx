import { IProduct } from '../../common/product';
import CardProduct from '../../components/CardProduct/CardProduct';
import LabelRed from '../../components/Label/LabelRed';
import styles from './ProductPage.module.css';
import CheckBoxs, { CheckBox } from './components/CheckBoxs';
import FilterAttribute from './components/FilterAttribute';
import RangeInput from './components/RangeInput';
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

const fakeProducts: IProduct[] = [
   {
      _id: '1',
      name: 'Product',
      desc: 'aaaaa',
      categoryId: 'a',
      price: 20,
      solded: 5,
      stock: 60,
      images: [
         {
            url: 'https://spacingtech.com/html/tm/freozy/freezy-ltr/image/product/p-4.jpg'
         }
      ],
      discount: 0
   },
   {
      _id: '1',
      name: 'Product',
      desc: 'aaaaa',
      categoryId: 'a',
      price: 20,
      solded: 5,
      stock: 60,
      images: [
         {
            url: 'https://spacingtech.com/html/tm/freozy/freezy-ltr/image/product/p-4.jpg'
         }
      ],
      discount: 0
   },
   {
      _id: '1',
      name: 'Product',
      desc: 'aaaaa',
      categoryId: 'a',
      price: 20,
      solded: 5,
      stock: 60,
      images: [
         {
            url: 'https://spacingtech.com/html/tm/freozy/freezy-ltr/image/product/p-4.jpg'
         }
      ],
      discount: 0
   },
   {
      _id: '1',
      name: 'Product',
      desc: 'aaaaa',
      categoryId: 'a',
      price: 20,
      solded: 5,
      stock: 60,
      images: [
         {
            url: 'https://spacingtech.com/html/tm/freozy/freezy-ltr/image/product/p-4.jpg'
         }
      ],
      discount: 12
   }
];
const ProductPage = () => {
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
                  <CheckBoxs checkboxs={fakeFilter} />
               </FilterAttribute>
            </article>
            <main className='w-[50%]'>
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
               <section className='grid grid-cols-3 gap-5 mt-5'>
                  {fakeProducts.map((item, index) => (
                     <CardProduct product={item} link='/' key={index} />
                  ))}
               </section>
            </main>
         </section>
      </div>
   );
};

export default ProductPage;
