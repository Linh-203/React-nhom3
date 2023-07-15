import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TruckIcon from '../assets/icons/Truck';
import HeadPhone from '../assets/icons/HeadPhone';
import Money from '../assets/icons/Money';
import Load from '../assets/icons/Load';
import { banner } from '../../db.json';
import { blog } from '../../db.json';
import productService from '../api/product';
import { useEffect, useState } from 'react';
const HomePage = () => {
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
      <div className='conatiner'>
         <hr />
         <div className='product px-28'>
            {products.length > 0 && (
               <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={4}
                  // navigation
                  // pagination={{ clickable: true }}
                  // scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  loop={true}
               >
                  {products.map((slide) => (
                     <SwiperSlide key={slide.images}>
                        <div className='flex justify-center items-center'>
                           <img src={slide.images[0].url} className='w-[90px] h-[80px]' />
                           <div className='ml-2 flex flex-col justify-center'>
                              <h4 className='text-red-500'>Healthy food</h4>
                              <p>15+ items</p>
                           </div>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            )}
         </div>
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
         <div className='delivery'>
            <div className='grid grid-cols-4 mx-20 my-10 gap-8 place-content-center'>
               <div className=' flex justify-center items-center shadow-md h-40'>
                  <TruckIcon width='70' height='50' />
                  <div className='delivery-text pl-5'>
                     <h2 className='text-center font-bold pr-10 text-slate-900'>Free delivery</h2>
                     <p>Orders over $99.00</p>
                  </div>
               </div>
               <div className=' flex justify-center items-center shadow-md h-35'>
                  <Money width='60' height='40' />
                  <div className='delivery-text pl-5'>
                     <h2 className='text-center font-bold pr-12 text-slate-900'>Back guarantee</h2>
                     <p>Money back guarantee.</p>
                  </div>
               </div>
               <div className=' flex justify-center items-center shadow-md h-35'>
                  <HeadPhone width='60' height='40' />
                  <div className='delivery-text pl-5'>
                     <h2 className='text-center font-bold pr-12 text-slate-900'>Online support 24/7</h2>
                     <p>Delicated client support</p>
                  </div>
               </div>
               <div className=' flex justify-center items-center shadow-md h-35'>
                  <Load width='60' height='40' />
                  <div className='delivery-text pl-5'>
                     <h4 className='text-center font-bold pr-12 text-slate-900'>90 Days return!!</h4>
                     <p>If goods have problems</p>
                  </div>
               </div>
            </div>
         </div>
         <hr className='my-20' />
         <div className='sale-products relative'>
            <div className='grid grid-cols-2 mx-20 my-20 gap-7'>
               <div>
                  <img src='https://spacingtech.com/html/tm/freozy/freezy-ltr/image/banner/banner-1.png' alt='' />
                  <h4 className='absolute text-[#e80808] font-bold text-[15px] top-[34%] left-[7%]  transform -translate-y-1/2'>
                     SALE UP 80% OFF
                  </h4>
                  <h2 className='absolute text-[32px] font-bold top-44 left-[7%] transform -translate-y-1/2'>
                     Bitter melon
                  </h2>
                  <button className='absolute top-[60%] left-[7%] text-[#e80808] transform -translate-y-1/2 bg-white w-36 h-10 rounded-3xl'>
                     SHOP NOW
                  </button>
               </div>
               <div>
                  <img src='https://spacingtech.com/html/tm/freozy/freezy-ltr/image/banner/banner-2.png' alt='' />
                  <h4 className='absolute text-[#e80808] font-bold text-[15px] top-[34%] left-[53%]  transform -translate-y-1/2'>
                     SALE UP 35% OFF
                  </h4>
                  <h2 className='absolute text-[32px] font-bold top-44 left-[53%] transform -translate-y-1/2'>
                     Healthy juice
                  </h2>
                  <button className='absolute top-[60%] left-[53%] text-[#e80808] transform -translate-y-1/2 bg-white w-36 h-10 rounded-3xl'>
                     SHOP NOW
                  </button>
               </div>
            </div>
         </div>
         <div className='text pt-20 pb-12'>
            <h4 className='text text-center font-bold  text-[16px]  text-[#e80808] '>BEST COLLECTION</h4>
            <h2 className='text text-center font-bold  text-[32px] '>Trending product</h2>
         </div>
         <div className='mx-24 my-24 bg-[#f8f8f8]'>
            {products.length > 0 && (
               <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={4}
                  navigation
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  loop={true}
               >
                  {products.map((slide) => (
                     <SwiperSlide key={slide.images}>
                        <img
                           src={slide.images[0].url}
                           className='w-full h-auto shadow-md rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
                        />
                        <h3 className='text text-center font-bold mt-4 text-[18px] '>{slide.title}</h3>
                        <p className='text text-center font-bold mt-1 text-[20px] text-[#7aa32a]'>${slide.price}</p>
                     </SwiperSlide>
                  ))}
               </Swiper>
            )}
         </div>
         <div className='text pt-20 pb-12'>
            <h4 className='text text-center font-bold  text-[16px]  text-[#e80808] '>ORGANIC LATEST STORY</h4>
            <h2 className='text text-center font-bold  text-[32px] '>Articles & blog</h2>
         </div>
         <div className='mx-20 my-20'>
            <Swiper
               modules={[Navigation, Pagination, Scrollbar, A11y]}
               spaceBetween={50}
               slidesPerView={3}
               // navigation
               onSwiper={(swiper) => console.log(swiper)}
               onSlideChange={() => console.log('slide change')}
               loop={true}
            >
               {blog.map((slide) => (
                  <SwiperSlide key={slide.image}>
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
            </Swiper>
         </div>
      </div>
   );
};

export default HomePage;
