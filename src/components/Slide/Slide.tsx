import React from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
type IProps = {
   children: React.ReactNode;
   slidesPerView: number;
   navigation?: boolean;
   autoplay?: boolean;
};
const Slide = (props: IProps) => {
   return (
      <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
         spaceBetween={50}
         autoplay={props.autoplay ? { delay: 2000 } : false}
         slidesPerView={props.slidesPerView}
         navigation={props.navigation || false}
         onSlideChange={() => console.log('slide change')}
         loop={true}
         
      >
         {props.children}
      </Swiper>
   );
};

export default Slide;
