import React from 'react';
import styles from '../ProductPage.module.css';
import LabelRed from '../../../components/Label/LabelRed';
type Props = {
   children: React.ReactNode;
   label: string;
};

const FilterAttribute = React.memo(({ children,  label}: Props) => {
   return (
      <div className={`${styles['block-filter']}`}>
         <LabelRed>{label}</LabelRed>
         <div className='w-full mt-5'>
            {children}
         </div>
         <hr className='mt-5' />
      </div>
   );
});

export default FilterAttribute;
