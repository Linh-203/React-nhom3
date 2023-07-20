import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { banner } from '../../../db.json';
import Slide from '../Slide/Slide';
const Banner = () => {
   return (
      <div className='banner relative'>
         {banner.length > 0 && (
            <Slide slidesPerView={1} autoplay={true} navigation={false}>
               {banner.map((slide, index) => (
                  <SwiperSlide key={index} className='relative'>
                     <img src={slide.image} alt={slide.title} />
                     <h4 className='absolute text-[#e80808] text-[22px] top-56 left-24  transform -translate-y-1/2'>
                        Healthy food collection
                     </h4>
                     <h2 className='absolute text-[73px] font-bold top-72 left-24 transform -translate-y-1/2'>
                        {slide.title}
                     </h2>
                     <button className='absolute top-[70%] left-24 text-white transform -translate-y-1/2 bg-red-600 w-40 h-14 rounded-3xl'>
                        SHOP NOW
                     </button>
                  </SwiperSlide>
               ))}
            </Slide>
         )}
      </div>
   );
};

export default Banner;
