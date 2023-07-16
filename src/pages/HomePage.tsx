import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';
import productService from '../api/product';
import Slide from '../components/Slide/Slide';
import Banner from '../components/Banner/Banner';
import CardProduct from '../components/CardProduct/CardProduct';
import CateSlide from '../components/CateSlide/CateSlide';
import Delivery from '../components/Delivery/Delivery';
import BannerSales from '../components/BannerSales/BannerSales';
import Blog from '../components/Blog/Blog';
import { IProduct } from '../common/product';
const HomePage = () => {
   const [products, setProduct] = useState<IProduct[]>([]);
   useEffect(() => {
      productService
         .getAllProduct({})
         .then(({ data }) => setProduct(data.data))
         .catch(({ response }) => {
            alert(response.data.message);
         });
   }, []);
   console.log(products);

   return (
      <div className='w-full'>
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
                     <CardProduct product={prd} link={'/products'} />{' '}
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
   );
};
export default HomePage;
