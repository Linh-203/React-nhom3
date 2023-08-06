import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import productService from '../../api/product';
import CateSlide from '../../components/CateSlide/CateSlide';
import { IProduct, VariationPopulate } from '../../common/product';
import { tabItem } from './constants/TabData';
import TabContent from '../../components/TabContent/TabContent';
import CardProduct from '../../components/CardProduct/CardProduct';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slide from '../../components/Slide/Slide';
import { usePostCartMutation } from '../../api-slice/baseCartAPI';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
const DetailProduct = () => {
   const { id } = useParams();
   const [product, setProduct] = useState<IProduct>({} as IProduct);
   const [products, setProducts] = useState<IProduct[]>([]);
   const [variationId, setVariationId] = useState<string>('');
   const tabs = useMemo(() => tabItem(product.desc, product.variations as VariationPopulate[]), [product]);
   const userId = useSelector((state: RootState) => state.authReducer.user._id);
   const navigate = useNavigate();
   useEffect(() => {
      productService
         .getProductById(id!)
         .then(({ data }) => setProduct(data.data))
         .catch((error) => {
            alert(error);
         });
   }, [id]);
   useEffect(() => {
      productService
         .getAllProduct({})
         .then(({ data }) => setProducts(data.data))
         .catch((error) => {
            alert(error);
         });
   }, []);
   useEffect(() => {
      if (product.variations) setVariationId(product.variations[0]._id);
   }, [product]);
   const [count, setCount] = useState(1);
   const addCount = () => {
      setCount((prev) => prev + 1);
   };
   const minusCount = () => {
      if (count > 0) {
         setCount((prev) => prev - 1);
      }
   };
   const [postCart] = usePostCartMutation();
   const handleAddToCart = async () => {
      if (!userId) {
         navigate('/login');
         return;
      }
      const data = {
         productId: product?._id,
         quantity: count,
         variationId: variationId,
         userId: userId
      };
      await postCart(data);
   };

   return (
      <div>
         <div className='px-32'>
            <CateSlide />
         </div>
         {Object.keys(product)?.length > 0 && (
            <div className='py-9 md:px-10 lg:px-60'>
               <div className='flex justify-center items-center md:flex-row flex-col gap-8'>
                  <div className=' w-full sm:w-96 md:w-8/12  lg:w-6/12  lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4'>
                     <div className=' w-full border-[1px] border-gray-200 lg:w-10/12 bg-gray-100 flex justify-center items-center rounded-lg'>
                        <img src={product?.images[0]?.url} alt='Wooden Chair Previw]' />
                     </div>
                     <div className=' w-full flex justify-start gap-2'>
                        {product?.images.map((image, index) => (
                           <div
                              key={index}
                              className='w-[30%] mt-3 border-[1px] border-gray-200 flex justify-center items-center py-4'
                           >
                              <img src={image?.url} alt='Wooden chair - preview 1' />
                           </div>
                        ))}
                     </div>
                  </div>
                  {/* <!-- Description Div --> */}
                  <div className='  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center'>
                     <p className=' focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600'>
                        Home / {product?.categoryId?.name} / {product?.name}
                     </p>
                     <h2 className='font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4'>
                        {product?.name}
                     </h2>
                     <p className=' font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 text-grayLight200'>
                        ${product?.price}
                     </p>
                     <p className='text-greenCus400 font-semibold mt-5 text-lg'>
                        Hurry up ! only <span className='px-2 py-1  bg-greenCus400 text-white'>{product?.stock}</span>{' '}
                        products left in stock
                     </p>
                     <div className='flex flex-row justify-between items-center mt-4'>
                        <p className=' font-medium text-base leading-4 text-gray-600'>
                           Availability: {product?.stock > 0 ? 'In stock' : 'Out of stock'}
                        </p>
                     </div>
                     <hr className=' bg-gray-200 w-full my-2' />
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
                                 max={10}
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
                        <hr className=' bg-gray-200 w-full mt-4' />
                     </div>
                     <div className='mt-10 flex justify-start gap-4 items-center'>
                        <p className=' font-medium text-base leading-4 text-gray-600'>Select Type Product</p>
                        <div className='flex justify-evenly gap-2 items-center max-w-[90%] flex-wrap overflow-auto max-h-[200px]'>
                           {product.variations.map((item, index) => (
                              <button
                                 className={`px-1 py-2 rounded-md border-[1px] border-greenCus400 text-greenCus400 hover:text-white hover:bg-greenCus400 duration-200 ${
                                    variationId === item._id ? 'bg-greenCus400 text-white' : 'text-greenCus400 bg-white'
                                 }`}
                                 key={index}
                                 onClick={() => setVariationId(item._id)}
                                 // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                              >{`${item.weight}.kg - ${item.vendorId.name} & ${item.vendorId.origin}`}</button>
                           ))}
                        </div>
                     </div>
                     <button
                        // eslint-disable-next-line @typescript-eslint/no-misused-promises
                        disabled={variationId === ''}
                        onClick={handleAddToCart}
                        className='focus:outline-none focus:ring-2 hover:bg-hightLigh hover:text-white duration-300 focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6'
                     >
                        Add to shopping bag
                     </button>
                  </div>
                  {/* <!-- Preview Images Div For larger Screen--> */}
               </div>
            </div>
         )}
         <div className='lg:px-60 px-10 border-t-[0.5px] border-[rgba(0,0,0,0.1)] pt-20 pb-20'>
            {' '}
            <TabContent tabs={tabs} />
         </div>
         <div className='bg-primaryBg  border-b-[1px] border-[rgba(0,0,0,0.1)] md:px-10 lg:px-60 py-10'>
            <p className='text-[2.5rem] font-bold text-colorText text-center'>New product</p>
            <div className='w-full mt-10'>
               {products?.length > 0 && (
                  <Slide slidesPerView={4} navigation={false} autoplay={true}>
                     {products.map((prd, index) => (
                        <SwiperSlide key={index}>
                           <CardProduct product={prd} link={`/products/${prd._id}`} />
                        </SwiperSlide>
                     ))}
                  </Slide>
               )}
            </div>
         </div>
      </div>
   );
};

export default DetailProduct;
