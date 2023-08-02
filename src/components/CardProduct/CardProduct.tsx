import React, { useState } from 'react';
import { IProduct } from '../../common/product';
import { Link } from 'react-router-dom';
import styles from './CardProduct.module.css';
import CartIcon from '../../assets/icons/CartIcon';
import EyeIcon from '../../assets/icons/EyeIcon';
import HeartIcon from '../../assets/icons/HeartIcon';
import Quickview from '../Quickview/Quickview';

type Props = {
   product: IProduct;
   link: string;
};

const CardProduct = React.memo(({ product, link }: Props) => {
   const [toggle, setToggle] = useState<boolean>(false);
   return (
      <>
         {toggle && <Quickview product={product} changeToggle={setToggle} />}
         <div className={`${styles['wrapper']}`}>
            <Link to={link} className={` block relative text-center`} onClick={() => window.scroll(0, 0)}>
               {product.discount > 0 && (
                  <p
                     className={`${styles['tail']} absolute top-5 left-5 px-2 py-1 text-[0.8rem] text-white bg-hightLigh`}
                  >
                     -{product.discount}%
                  </p>
               )}
               <div className='relative'>
                  <div className='w-full rounded-lg  sm:h-72 lg:h-96 bg-white flex justify-center items-center'>
                     <img
                        alt='Art'
                        src={product.images[0].url}
                        className=' w-full object-cover scale-[1] aspect-auto '
                     />
                  </div>
               </div>
               <h3 className='mt-4 text-[1.1rem] font-semibold text-colorText '>{product.name}</h3>
               <div className='flex justify-center items-center w-full gap-3 mt-2'>
                  <p className=' text-greenCus text-lg font-semibold'>
                     ${product.discount > 0 ? product.price - (product.price * product.discount) / 100 : product.price}
                  </p>
                  {product.discount > 0 && (
                     <del className='text-grayLight100 font-semibold text-lg'>${product.price}</del>
                  )}
               </div>
            </Link>
            <div className={`${styles['mark']}  sm:h-72 lg:h-96`}>
               <div className='flex justify-center items-center w-[50%] gap-3'>
                  <button
                     className={`${styles['sub-btn']} p-3 rounded-full bg-greenCus text-white hover:bg-hightLigh duration-200 `}
                  >
                     <span
                        className={`${styles['tooltip-arrow']} absolute min-w-[100px] bg-colorText py-1 top-[-2.5rem] left-[-2rem]`}
                     >
                        Add to cart
                     </span>
                     <CartIcon />
                  </button>
                  <button
                     className={`${styles['sub-btn']} p-3 rounded-full bg-greenCus text-white hover:bg-hightLigh duration-200`}
                     onClick={() => setToggle(true)}
                  >
                     <span
                        className={`${styles['tooltip-arrow']} absolute min-w-[100px] bg-colorText py-1 top-[-2.5rem] left-[-2rem]`}
                     >
                        Quick view
                     </span>
                     <EyeIcon />
                  </button>
                  <button
                     className={`${styles['sub-btn']} p-3 rounded-full bg-greenCus text-white hover:bg-hightLigh duration-200`}
                  >
                     <span
                        className={`${styles['tooltip-arrow']} absolute min-w-[100px] bg-colorText py-1 top-[-2.5rem] left-[-2rem]`}
                     >
                        Wishlist
                     </span>
                     <HeartIcon />
                  </button>
               </div>
            </div>
         </div>
      </>
   );
});

export default CardProduct;
