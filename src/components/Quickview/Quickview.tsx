import { useEffect } from 'react';
import { IProduct } from '../../common/product';
import PortalF8 from '../Portal/PortalOfHiep';

type Props = {
   product: IProduct;
   changeToggle: (state: boolean) => void;
};

const Quickview = (props: Props) => {
   useEffect(() => {
      document.body.style.overflow = 'hidden';

      return () => {
         document.body.style.overflow = 'auto';
      };
   }, [props.product]);

   return (
      <PortalF8>
         <div className='fixed left-0 w-full h-full bg-[rgba(0,0,0,0.2)] flex items-center overflow-hidden transition-all justify-center z-[1000] '>
            <div className='bg-white rounded-lg max-w-[35%] max-h'>
               <div className='flex justify-between items-center p-3 border-b-[1px] border-grayLight100'>
                  <p className='text-grayLight200 font-semibold'>Quick view</p>
                  <button onClick={() => props.changeToggle(false)} className='text-grayLight200 font-semibold'>
                     x
                  </button>
               </div>
               <div className='flex justify-start gap-4 pb-5'>
                  <img src={props.product.images[0].url} className='w-[50%] aspect-square' />
                  <div className='flex-1 flex flex-col items-start pt-3 gap-3'>
                     <p className='text-xl font-semibold text-colorText'>{props.product.name}</p>
                     <p className='text-xl font-semibold text-greenCus'>
                        ${props.product.price - props.product.price * (props.product.discount / 100)}
                     </p>
                     <del className='text-lg font-semibold text-grayLight100 '>${props.product.price}</del>
                  </div>
               </div>
            </div>
         </div>
      </PortalF8>
   );
};

export default Quickview;
