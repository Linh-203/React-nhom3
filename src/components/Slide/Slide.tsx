import React from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
type IProps = {
   children: React.ReactNode;
   slidesPerView: number;
   navigation?: boolean;
};
const Slide = (props: IProps) => {
   return (
      <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         spaceBetween={50}
         slidesPerView={props.slidesPerView}
         navigation={props.navigation || false}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
         loop={true}
      >
         {props.children}
      </Swiper>
   );
};

export default Slide;