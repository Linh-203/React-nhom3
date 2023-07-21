import { useEffect, memo, useState } from 'react';

type IFeild = {
   name?: string;
   id?: string;
   placeholder?: string;
   className?: string;
   value?: string | number;
   title?: string;
};

type IInputFeild = IFeild & {
   type?: 'text' | 'file' | 'date' | 'number' | 'search' | 'color' | 'radio' | 'checkbox';
   multiple?: boolean;
};

type ISelectFeild = IFeild & {
   children?: React.ReactNode;
   firstValue: string;
};

type ISelectOption = {
   value?: string | number;
   label?: string;
};

type ITextAriaFeild = IFeild & {
   rows?: number;
   cols?: number;
};

const InputFeild = memo((props: IInputFeild) =>{
   const [value, setValue] = useState<string | number>(props.value || '');

   useEffect(() => {
      setValue(props.value || '');
   }, [props]);

   return (
      <div className='relative z-0 w-full group'>
         <input
            onChange={(e) => setValue(e.target.value)}
            type={props.type || 'text'}
            name={props.name}
            id={props.id}
            className={`mt-3 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
               props.className || ''
            }`}
            placeholder={props.placeholder}
            value={value}
            multiple={props.multiple || false}
         />
         <label className=' peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
            {props.title}
         </label>
      </div>
   );
})

const SelectFeild = memo((props: ISelectFeild) => {
   return (
      <div className='relative z-0 w-full group'>
         <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>{props.title}</label>
         <select
            name={props.name}
            id={props.id}
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
               props.className || ''
            }`}
         >
            <option selected value={props.value || ''}>{props.firstValue}</option>
            {props.children}
         </select>
      </div>
   );
})

const SelectOption = memo((props: ISelectOption) => {
   const { value, label } = props;

   return <option value={value}>{label}</option>;
})

const TextareaFeild = memo((props: ITextAriaFeild) => {
    const [value, setValue] = useState<string>(props.value?.toString() || '')

    useEffect(() => {
        setValue(props.value?.toString() || '')
    }, [props])

   return (
      <div className='w-full border mt-4 border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-800'>
         <div className='px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Description</label>
            <textarea
               onChange={(e) => setValue(e.target.value)}
               name={props.name}
               id={props.id}
               className={`outline-none w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 outl ${props.className || ''}`}
               placeholder={props.placeholder}
               value={value}
               rows={props.rows}
               cols={props.cols}
            ></textarea>
         </div>
        
      </div>
   );
})

const FormInputFeild = {
   InputFeild,
   SelectFeild,
   SelectOption,
   TextareaFeild
};
export default FormInputFeild;