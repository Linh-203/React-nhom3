import React, { useEffect, useMemo } from 'react';

type Props = {
   pageRange: number[];
   curPage: number;
   nextPage: () => void;
   prevPage: () => void;
   goToPage: (p: number) => void;
};

const Paginate = React.memo(({ pageRange, goToPage, nextPage, prevPage, curPage }: Props) => {
   
   return (
      <div className='flex justify-center items-center w-full mt-5 gap-2'>
         {curPage !== 1 && (
            <button className='font-bold text-colorText p-2' onClick={prevPage}>
               {'<'}
            </button>
         )}
         <div className='flex justify-start items-center gap-5'>
            {pageRange.map((btn, index) => (
               <button
                  key={index}
                  className={`text-colorText font-semibold ${
                     curPage === btn ? 'bg-hightLigh text-white' : 'bg-transparent'
                  } p-2 rounded-lg w-7 h-7 flex items-center justify-center`}
                  onClick={() => goToPage(btn)}
               >
                  {btn}
               </button>
            ))}
         </div>
         <button className='font-bold text-colorText p-2' onClick={nextPage}>
            {'>'}
         </button>
      </div>
   );
});

export default Paginate;
