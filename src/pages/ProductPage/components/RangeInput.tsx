import { useEffect, useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allQuerySelector, filterSlice } from '../../../slices/FilterSlice';
import { useDebounce } from '../../../hooks/useDebounce';

type Props = {
   max: number;
   min: number;
   step: number;
   handleReset: () => void;
};
type Price = {
   from: number;
   to: number;
};
const RangeInput = memo(({ max, min, step, handleReset }: Props) => {
   const [price, setPrice] = useState<Price>({ from: min, to: max });
   const { fromPrice, toPrice } = useSelector(allQuerySelector);
   const dispatch = useDispatch();
   const finalFrom = useDebounce<number>(price?.from, 500);
   const finalTo = useDebounce<number>(price?.to, 500);
   useEffect(() => {
      if (fromPrice === min && toPrice === max) {
         setPrice({ from: min, to: max });
      }
   }, [fromPrice, toPrice, max, min]);
   useEffect(() => {
      dispatch(filterSlice.actions.setFromPrice(finalFrom!));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [finalFrom]);

   useEffect(() => {
      dispatch(filterSlice.actions.setToPrice(finalTo!));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [finalTo]);

   return (
      <div>
         <div className='w-full flex justify-between items-center'>
            <p className='text-grayLight200'>The highest price is ${max}</p>
            <button
               className='text-grayLight100  border-grayLight100 border-b-[1px] font-semibold hover:text-grayLight200'
               onClick={handleReset}
            >
               Reset
            </button>
         </div>
         <div className='mt-5 flex justify-start items-center'>
            <input
               type='range'
               className=''
               value={price.from}
               step={step}
               max={Math.floor(max / 2) - 1}
               min={min}
               onChange={(e) => {
                  setPrice((prev) => ({ ...prev, from: Number(e.target.value) } as Price));
                  dispatch(filterSlice.actions.setPage(1));
               }}
            />
            <input
               type='range'
               value={price.to}
               className=''
               step={step}
               max={max}
               min={Math.floor(max / 2) + 1}
               onChange={(e) => {
                  setPrice((prev) => ({ ...prev, to: Number(e.target.value) } as Price));
                  dispatch(filterSlice.actions.setPage(1));
               }}
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
});

export default RangeInput;
