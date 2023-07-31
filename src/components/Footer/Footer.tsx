import HeadPhone from '../../assets/icons/HeadPhone';
const Footer = () => {
   return (
      <footer className='w-full bg-primaryBg '>
         <div className='grid grid-cols-4 gap-10 items-center px-24 pt-28 pb-10 bg-[#f8f8f8]'>
            <div>
               <img
                  src='https://spacingtech.com/html/tm/freozy/freezy-ltr/image/logo/logo.png'
                  alt='logo'
                  className='aspect-[3/1] w-[50%]'
               />
               <h5 className='py-7 w-[270px]'>
                  But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                  born.
               </h5>
               <div className='flex justify-between w-[255px]'>
                  <div>
                     <HeadPhone className='w-12 h-12 ' />
                  </div>
                  <div>
                     <h3 className=' pr-8 font-bold text-[#333333]'>HOTLINE NUMBER :-</h3>
                     <p>(+0261) 1200 0230 0256</p>
                  </div>
               </div>
            </div>
            <div className='pl-32'>
               <h2 className='pb-[12px] text-lg font-bold text-[#333333]'>Top category</h2>
               <h2 className='pb-[7px] text-lg'>Organic food</h2>
               <h2 className='pb-[7px] text-lg'>Fresh vegitables</h2>
               <h2 className='pb-[7px] text-lg'>Healthy juice</h2>
               <h2 className='pb-[7px] text-lg'>Green broccoli</h2>
               <h2 className='pb-[7px] text-lg'>Exotic dryfruit</h2>
            </div>
            <div className='px-14'>
               <h2 className='pb-[12px] text-lg font-bold text-[#333333]'>Informations</h2>
               <h2 className='pb-[7px] text-lg'>Privacy policy</h2>
               <h2 className='pb-[7px] text-lg'>Return policy</h2>
               <h2 className='pb-[7px] text-lg'> Terms & Condition</h2>
               <h2 className='pb-[7px] text-lg'>Customer care</h2>
               <h2 className='pb-[7px] text-lg'> Wishlist</h2>
            </div>
            <div>
               <h2 className='pt-5 pb-[12px] text-lg font-bold text-[#333333]'>Follow on instagram</h2>
               <div className='grid grid-cols-3 grid-rows-2 gap-5'>
                  <img
                     src='https://static.demilked.com/wp-content/uploads/2020/03/5e74779735304-japanese-mom-egg-food-art-1-5e73634d343e4__880.jpg'
                     alt=''
                  />
                  <img
                     src='https://static.demilked.com/wp-content/uploads/2020/03/5e7477986d2f5-japanese-mom-egg-food-art-6-5e73635747dd4__880.jpg'
                     alt=''
                  />
                  <img
                     src='https://static.demilked.com/wp-content/uploads/2020/03/5e74779c9aa77-japanese-mom-egg-food-art-48-5e7363a9eee61__880.jpg'
                     alt=''
                  />
                  <img
                     src='https://people.com/thmb/OQh-xEIN-OAj0O7ojr-bs5jBLR8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(532x0:534x2)/scallops-12271ff7a7bd4dc596df1fee4f6c9942.jpg'
                     alt=''
                  />
                  <img
                     src='https://www.bhg.com/thmb/ni5Io1A8d1kPZ1G1Kev8682cooA=/1939x0/filters:no_upscale():strip_icc()/RU160960-ac1ff99537a2439f89c8ff14a58cad1b.jpg'
                     alt=''
                  />
                  <img
                     src='https://www.allrecipes.com/thmb/Tng6-avc3n4cW8VdTqdECxl3pp0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3220117-467b8ee80d1b49e2b7d08817fe0c39d4.jpg'
                     alt=''
                  />
               </div>
            </div>
         </div>
         <hr className='h-[1px] bg-slate-950 my-5' />
         <div className='flex justify-between py-8 px-28'>
            <h2 className='text-lg'>© 2023 spacingtech all rights reserved</h2>
            <div className='grid grid-cols-4'>
               <img src='https://spacingtech.com/html/tm/freozy/freezy-ltr/image/payment-icon/american.svg' alt='' />
               <img src='https://spacingtech.com/html/tm/freozy/freezy-ltr/image/payment-icon/master.svg' alt='' />
               <img src='https://spacingtech.com/html/tm/freozy/freezy-ltr/image/payment-icon/paypal.svg' alt='' />
               <img src='https://spacingtech.com/html/tm/freozy/freezy-ltr/image/payment-icon/visa.svg' alt='' />
            </div>
         </div>
      </footer>
   );
};

export default Footer;
