import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';
import productService from '../../api/product';
import Slide from '../../components/Slide/Slide';
const CateSlide = () => {
   const [products, setProduct] = useState([]);
   useEffect(() => {
      productService
         .getAllProduct()
         .then(({ data }) => setProduct(data))
         .catch(({ response }) => {
            alert(response.data.message);
         });
   }, []);
   console.log(products);
   return (
      <div className='product px-28 py-5'>
         {products.length > 0 && (
            <Slide slidesPerView={4} navigation={true}>
               {products.map((slide, index) => (
                  <SwiperSlide key={index}>
                     <div className='flex justify-center items-center'>
                        <img src={slide.images[0].url} className='w-[90px] h-[80px]' />
                        <div className='ml-2 flex flex-col justify-center'>
                           <h4 className='text-red-500'>Healthy food</h4>
                           <p>15+ items</p>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Slide>
         )}
      </div>
   );
};

export default CateSlide;
