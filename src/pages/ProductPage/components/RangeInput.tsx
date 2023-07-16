import React, { useState } from 'react';

type Props = {
   max: number;
   min: number;
   step: number;
};
type Price = {
   from: number;
   to: number;
};
const RangeInput = ({ max, min, step }: Props) => {
   const [price, setPrice] = useState<Price>({ from: min, to: max });
   return (
      <div>
         <div className='mt-5 flex justify-start items-center'>
            <input
               type='range'
               className=''
               value={price.from}
               step={step}
               max={Math.floor(max / 2) - 1}
               min={min}
               onChange={(e) => setPrice((prev) => ({ ...prev, from: Number(e.target.value) } as Price))}
            />
            <input
               type='range'
               value={price.to}
               className=''
               step={step}
               max={max}
               min={Math.floor(max / 2) + 1}
               onChange={(e) => setPrice((prev) => ({ ...prev, to: Number(e.target.value) } as Price))}
            />
         </div>
         <div className='flex w-full justify-center items-center gap-5 mt-5'>
            <div>
               <p className='text-grayLight100 text-sm '>From</p>
               <div className='w-full relative'>
                  <span className='text-grayLight200 absolute text-sm z-10 top-[50%] left-3 translate-y-[-50%]'>$</span>
                  <input
                     type='text'
                     readOnly
                     value={price.from}
                     className='p-2 pl-5 w-[80%] rounded-md border-[1px] border-grayLight100 outline-none relative text-grayLight200'
                  />
               </div>
            </div>

            <div>
               <p className='text-grayLight100 text-sm '>To</p>
               <div className='w-full relative'>
                  <span className='text-grayLight200 absolute text-sm z-10 top-[50%] left-3 translate-y-[-50%]'>$</span>
                  <input
                     type='text'
                     readOnly
                     value={price.to}
                     className='p-2 pl-5 w-[80%] rounded-md border-[1px] border-grayLight100 outline-none relative text-grayLight200'
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default RangeInput;
