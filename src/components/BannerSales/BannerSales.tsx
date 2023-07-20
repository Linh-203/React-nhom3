import React from 'react';

const BannerSales = () => {
   return (
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
               <button className='absolute top-[70%] left-[7%] text-[#e80808] transform -translate-y-1/2 bg-white w-36 h-10 rounded-3xl'>
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
               <button className='absolute top-[70%] left-[53%] text-[#e80808] transform -translate-y-1/2 bg-white w-36 h-10 rounded-3xl'>
                  SHOP NOW
               </button>
            </div>
         </div>
      </div>
   );
};

export default BannerSales;
