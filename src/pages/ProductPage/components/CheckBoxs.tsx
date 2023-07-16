import React from 'react';

type Props = {
   checkboxs: CheckBox[];
};
export type CheckBox = {
   value: string;
   title: string;
   name: string;
   quantity?: number;
};
const CheckBoxs = ({ checkboxs }: Props) => {
   return (
      <div className='w-full max-h-[200px] overflow-auto flex flex-col px-2'>
         {checkboxs.map((item, index) => (
            <div key={index} className='flex justify-between items-center mt-5'>
               <div>
                  <input type='checkbox' name={item.name} id={item.value} value={item.value} />
                  <label className='ml-2 text-grayLight200 flex items-center' htmlFor={item.value}>
                     <span className='ml-8'>{item.title}</span>
                  </label>
               </div>
               <span className='text-grayLight200'>({item.quantity && item.quantity})</span>
            </div>
         ))}
      </div>
   );
};

export default CheckBoxs;
