import { useState } from 'react';
type Props = {
   checkboxs: Partial<CheckBox>[];
   handleReset: () => void;
};
export type CheckBox = {
   value: string;
   title: string;
   name: string;
   quantity?: number;
   handleCheck: () => void;
   cancelCheck: () => void;
};
const Radios = ({ checkboxs, handleReset }: Props) => {
   const [checkedRadio, setCheckedRadio] = useState<HTMLInputElement>();
   const handleChecked = (target: HTMLInputElement, cb: () => void, cancel: () => void) => {
      if (target?.checked) {
         setCheckedRadio(target);
         cb();
      } else {
         cancel();
      }
   };
   return (
      <div>
         <div className='w-full flex justify-between items-center'>
            <p className='text-grayLight200'>Select one</p>
            <button
               className='text-grayLight100  border-grayLight100 border-b-[1px] font-semibold hover:text-grayLight200'
               onClick={() => {
                  handleReset();
                  if (checkedRadio) checkedRadio.checked = false;
               }}
            >
               Reset
            </button>
         </div>
         <div className='w-full max-h-[200px] overflow-auto flex flex-col px-2'>
            {checkboxs.map((item, index) => (
               <div key={index} className='flex justify-between items-center mt-5'>
                  <div>
                     <input
                        type='radio'
                        name={item?.name}
                        id={item?.value}
                        value={item?.value}
                        onChange={(e) => handleChecked(e.target, item.handleCheck!, item.cancelCheck!)}
                     />
                     <label className='ml-2 text-grayLight200 flex items-center' htmlFor={item?.value}>
                        <span className='ml-8'>{item?.title}</span>
                     </label>
                  </div>
                  <span className='text-grayLight200'>({item?.quantity && item?.quantity})</span>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Radios;
