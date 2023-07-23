import React from 'react';
import PortalF8 from '../Portal/PortalOfHiep';

type Props = {
   head: string;
   desc?: string;
   children?: React.ReactNode;
   type: 'notice' | 'confirm';
   isOpen: boolean;
   loading?: boolean;
   handleCheckConfirm: (value: boolean) => Promise<void>;
};

const Popup = React.memo((props: Props) => {
   if (!props.isOpen) return null;
   return (
      <PortalF8>
         <div className='fixed left-0 w-full h-full bg-[rgba(0,0,0,0.2)] flex items-center overflow-hidden transition-all justify-center'>
            <div className='bg-white rounded-lg min-w-[30vw] min-h-[20vh] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-3'>
               <p className='font-semibold text-colorText text-md'>{props.head}</p>
               <div className=''>
                  <p className='text-grayLight200 '>{props.desc}</p>
                  {props.children}
               </div>
               <div className='flex w-full justify-end gap-4 items-center absolute bottom-0 left-0 px-4 pb-2'>
                  <button
                     className='border-[1px] rounded-lg border-hightLigh p-2 text-hightLigh'
                     onClick={() => void props.handleCheckConfirm(false)}
                  >
                     Cancel
                  </button>
                  {props.type === 'confirm' && (
                     <button
                        className='rounded-lg bg-hightLigh p-2 text-white flex justify-center items-center gap-2'
                        onClick={() => void props.handleCheckConfirm(true)}
                     >
                        {props.loading && (
                           <div
                              className=' text-white flex justify-center items-center inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
                              role='status'
                           >
                              <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
                                 Loading...
                              </span>
                           </div>
                        )}
                        Confirm
                     </button>
                  )}
               </div>
            </div>
         </div>
      </PortalF8>
   );
});

export default Popup;
