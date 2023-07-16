import React from 'react';
import { IProduct } from '../../common/product';
import { Link } from 'react-router-dom';
import styles from './CardProduct.module.css';

type Props = {
   product: IProduct;
   link: string;
};

const CardProduct = React.memo(({ product, link }: Props) => {
   console.log(product);

   return (
      <Link to={link} className={`${styles['wrapper']} block relative text-center`}>
         {product.discount > 0 && (
            <p className={`${styles['tail']} absolute top-5 left-5 px-2 py-1 text-[0.8rem] text-white bg-hightLigh`}>
               -{product.discount}%
            </p>
         )}
         <div className='relative'>
            <img alt='Art' src={product.images[0].url} className='h-64 object-cover sm:h-80 lg:h-60' />
            <div className={`${styles['mark']}`}>
               <div className='flex justify-center items-center w-[50%]'></div>
            </div>
         </div>
         <h3 className='mt-4 text-[1.1rem] font-semibold text-colorText '>{product.name}</h3>
         <p className='mt-2 text-greenCus text-lg font-semibold'>$ {product.price}</p>
      </Link>
   );
});

export default CardProduct;
