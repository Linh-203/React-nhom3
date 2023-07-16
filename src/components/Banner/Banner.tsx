import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { banner } from '../../../db.json';
const Banner = () => {
   return (
      <div className='banner relative'>
         <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            loop={true}
         >
            {banner.map((slide) => (
               <SwiperSlide key={slide.image} className='relative'>
                  <img src={slide.image} alt={slide.title} />
                  <h4 className='absolute text-[#e80808] text-[22px] top-56 left-24  transform -translate-y-1/2'>
                     Healthy food collection
                  </h4>
                  <h2 className='absolute text-[73px] font-bold top-72 left-24 transform -translate-y-1/2'>
                     {slide.title}
                  </h2>
                  <button className='absolute top-[60%] left-24 text-white transform -translate-y-1/2 bg-red-600 w-40 h-14 rounded-3xl'>
                     SHOP NOW
                  </button>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default Banner;
