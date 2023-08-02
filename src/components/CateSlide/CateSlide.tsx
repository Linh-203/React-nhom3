import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';
import productService from '../../api/product';
import Slide from '../../components/Slide/Slide';
import { IProduct } from '../../common/product';
const CateSlide = () => {
   const [products, setProduct] = useState<IProduct[]>([]);
   useEffect(() => {
      productService
         .getAllProduct({})
         .then(({ data }) => setProduct(data.data))
         .catch(({ response }) => {
            alert(response.data.message);
         });
   }, []);
   return (
      <div className='product py-9'>
         {products.length > 0 && (
            <Slide slidesPerView={4} navigation={false} autoplay={true}>
               {products.map((slide, index) => (
                  <SwiperSlide key={index}>
                     <div className='flex justify-center items-center'>
                        <img src={slide.images[0].url} className='w-[90px] h-[80px]' />
                        <div className='ml-2 flex flex-col justify-center'>
                           <h4 className=' text-[#7aa32a]'>Healthy food</h4>
                           <p className='hover:text-red-600'>15+ items</p>
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
