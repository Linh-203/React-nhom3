import { lazy, Suspense } from 'react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect } from 'react';
import { IQuery } from '../api/product';
import CardProduct from '../components/CardProduct/CardProduct';
import { useDispatch, useSelector } from 'react-redux';
import { allInfoSelector, fetchProduct, productsSelector } from '../slices/ProductSlice';
import Message from '../components/Message/Message';
import { AppDispatch } from '../store/store';
import Loading from '../components/Loading/Loading';

const Slide = lazy(() => import('../components/Slide/Slide'));
const Banner = lazy(() => import('../components/Banner/Banner'));
const CateSlide = lazy(() => import('../components/CateSlide/CateSlide'));
const Delivery = lazy(() => import('../components/Delivery/Delivery'));
const BannerSales = lazy(() => import('../components/BannerSales/BannerSales'));
const Blog = lazy(() => import('../components/Blog/Blog'));

const HomePage = () => {
   const products = useSelector(productsSelector);
   const dispatch = useDispatch<AppDispatch>();
   const { error, loading } = useSelector(allInfoSelector);
   useEffect(() => {
      void (async () => {
         await dispatch(fetchProduct({} as IQuery));
      })();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   if (loading) return <Loading screen='large' />;
   return (
      <Suspense fallback={<Loading screen='large' />}>
         <div className='w-full'>
            {error?.content !== '' && <Message msg={error?.content} type={error?.type} duration={2000} />}
            <hr />
            <CateSlide />
            <Banner />
            <Delivery />
            <hr className='my-20' />
            <BannerSales />
            <div className='text pt-20 pb-12'>
               <h4 className='text text-center font-bold  text-[16px]  text-[#e80808] '>BEST COLLECTION</h4>
               <h2 className='text text-center font-bold  text-[32px] '>Trending product</h2>
            </div>
            {products.length > 0 && (
               <Slide slidesPerView={4} navigation={true}>
                  {products.map((prd, index) => (
                     <SwiperSlide key={index}>
                        <CardProduct product={prd} link={`/products/${prd._id}`} />{' '}
                     </SwiperSlide>
                  ))}
               </Slide>
            )}
            <div className='text pt-36 pb-12'>
               <h4 className='text text-center font-bold  text-[16px]  text-[#e80808] '>ORGANIC LATEST STORY</h4>
               <h2 className='text text-center font-bold  text-[32px] '>Articles & blog</h2>
            </div>
            <Blog />
         </div>
      </Suspense>
   );
};
export default HomePage;
