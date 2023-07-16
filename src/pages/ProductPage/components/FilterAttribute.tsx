import React from 'react';
import styles from '../ProductPage.module.css';
import LabelRed from '../../../components/Label/LabelRed';
type Props = {
   children: React.ReactNode;
   type: 'checkbox' | 'range' | 'text';
   label: string;
};

const FilterAttribute = React.memo(({ children, type, label }: Props) => {
   return (
      <div className={`${styles['block-filter']}`}>
         <LabelRed>{label}</LabelRed>
         <div className='w-full mt-5'>
            <div className='w-full flex justify-between items-center'>
               {type === 'checkbox' && (
                  <p className='text-grayLight200'>
                     <span>0</span> selected
                  </p>
               )}
               {type !== 'text' && (
                  <button className='text-grayLight100  border-grayLight100 border-b-[1px] font-semibold hover:text-grayLight200'>
                     Reset
                  </button>
               )}
            </div>
            {children}
         </div>
         <hr className='mt-5' />
      </div>
   );
});

export default FilterAttribute;
