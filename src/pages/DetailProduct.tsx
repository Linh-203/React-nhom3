import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../api/product';
import CateSlide from '../components/CateSlide/CateSlide';
import { IProduct } from '../common/product';

const DetailProduct = () => {
   const { id } = useParams();
   const [product, setProduct] = useState<IProduct>({} as IProduct);
   useEffect(() => {
      productService
         .getProductById(id)
         .then(({ data }) => setProduct(data.data))
         .catch(({ response }) => {
            alert(response.data.message);
         });
   }, [id]);
   const [count, setCount] = useState(0);
   const addCount = () => {
      setCount((prev) => prev + 1);
   };
   const minusCount = () => {
      if (count > 0) {
         setCount((prev) => prev - 1);
      }
   };

   return (
      <div>
         <CateSlide />

         {Object.keys(product)?.length > 0 && (
            <div className='2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 '>
               <div className='flex justify-center items-center lg:flex-row flex-col gap-8'>
                  <div className=' w-full sm:w-96 md:w-8/12  lg:w-6/12  lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4'>
                     <div className=' w-full border-[1px] border-gray-200 lg:w-10/12 bg-gray-100 flex justify-center items-center'>
                        <img src={product?.images[0]?.url} alt='Wooden Chair Previw' />
                     </div>
                     <div className=' w-full lg:w-4/12 flex  lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6'>
                        {product?.images.map((image, index) => (
                           <div
                              key={index}
                              className=' mt-3 border-[1px] border-gray-200 flex justify-center items-center py-4'
                           >
                              <img src={image.url} alt='Wooden chair - preview 1' />
                           </div>
                        ))}
                     </div>
                  </div>
                  {/* <!-- Description Div --> */}
                  <div className='  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center'>
                     <p className=' focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600'>
                        Home / {product.categoryId.name} / {product.name}
                     </p>
                     <h2 className='font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4'>
                        {product.name}
                     </h2>
                     <p className=' font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 text-grayLight200'>
                        ${product.price}
                     </p>
                     <p className='text-greenCus400 font-semibold mt-5'>
                        Hurry up ! only <span className='p-2 bg-greenCus400 text-white'>{product.stock}</span> products
                        left in stock
                     </p>
                     <div className='lg:mt-11 mt-10'>
                        <div className='flex flex-row justify-between'>
                           <p className=' font-medium text-base leading-4 text-gray-600'>Select quantity</p>
                           <div className='flex'>
                              <span
                                 onClick={minusCount}
                                 className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1'
                              >
                                 -
                              </span>
                              <input
                                 id='counter'
                                 className='border border-gray-300 h-full text-center w-14 pb-1 outline-none'
                                 type='number'
                                 onChange={(e) => setCount(Number(e.target.value))}
                                 max={product.stock}
                                 step={1}
                                 min={0}
                                 value={count}
                              />
                              <span
                                 onClick={addCount}
                                 className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 '
                              >
                                 +
                              </span>
                           </div>
                        </div>
                        <hr className=' bg-gray-200 w-full my-2' />
                        <div className='flex flex-row justify-between items-center mt-4'>
                           <p className=' font-medium text-base leading-4 text-gray-600'>
                              Availability: {product.stock > 0 ? 'In stock' : 'Out of stock'}
                           </p>
                        </div>
                        <hr className=' bg-gray-200 w-full mt-4' />
                     </div>
                     <button className='focus:outline-none focus:ring-2 hover:bg-hightLigh hover:text-white duration-300 focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6'>
                        Add to shopping bag
                     </button>
                  </div>
                  {/* <!-- Preview Images Div For larger Screen--> */}
               </div>
               
            </div>
         )}
      </div>
   );
};

export default DetailProduct;
