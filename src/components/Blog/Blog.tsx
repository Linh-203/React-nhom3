import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slide from '../../components/Slide/Slide';
import { blog } from '../../../db.json';
const Blog = () => {
   return (
      <div className='mx-20 my-20'>
         <Slide slidesPerView={4} navigation={false}>
            {blog.map((slide, index) => (
               <SwiperSlide key={index}>
                  <img
                     src={slide.image}
                     alt={slide.title}
                     className='w-full h-auto shadow-md rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
                  />
                  <h3 className='text  font-bold  my-4 text-[20px] '>{slide.title}</h3>
                  <p className='text  mt-1  '>${slide.subTitle}</p>
                  <button className=' mt-5 text-white  bg-red-600 w-40 h-10 rounded-3xl'>READ MORE</button>
               </SwiperSlide>
            ))}
         </Slide>
      </div>
   );
};

export default Blog;
