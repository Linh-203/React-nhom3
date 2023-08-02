/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState, useEffect, useCallback } from 'react';
import FormInputField from '../../../components/InputField/InputFeild';
import { IVariation, IVendor } from '../../../common/product';
import { getAllVendor } from '../../../api/vendor';
import { v4 as uuidv4 } from 'uuid';
type Props<T> = {
   getValues: (value: T[]) => void;
   defaultValue?: IVariation[];
};

const { InputField, SelectField, SelectOption } = FormInputField;
const MultiField = <T,>(props: Props<T>) => {
   const [data, setData] = useState<IVariation>({} as IVariation);
   const [dataSubmit, setDataSubmit] = useState<IVariation[]>([]);
   const [vendors, setVendors] = useState<IVendor[]>([]);
   useEffect(() => {
      void (async () => {
         try {
            const { data } = await getAllVendor();
            setVendors(data.data);
         } catch (error) {
            console.log(error);
         }
      })();
   }, []);
   useEffect(() => {
      if (props.defaultValue) setDataSubmit(props.defaultValue);
   }, [props.defaultValue]);
   const handleGetValue = useCallback(
      (name: string, value: string | number) => {
         // eslint-disable-next-line @typescript-eslint/no-unsafe-call
         setData({ ...data, [name]: value, _id: uuidv4() });
      },
      [data]
   );
   const handleAddInstance = () => {
      if (Object.keys(data).length < 3) return;
      const dataReturn = [...dataSubmit, data];
      props.getValues(dataReturn as T[]);
      setDataSubmit([...dataSubmit, data]);
   };
   const handleRemoveVariation = (id: string) => {
      props.getValues(dataSubmit.filter((item) => item._id !== id) as T[]);
      setDataSubmit(dataSubmit.filter((item) => item._id !== id));
   };
   return (
      <div className=''>
         <div className='flex flex-col items-start justify-start gap-2 w-full max-h-[300px] overflow-auto'>
            <p className='text-sm text-colorText'>List variations:</p>
            <div className='flex flex-col items-start gap-5'>
               {dataSubmit.map((item, index) => (
                  <div key={index} className='flex justify-between items-center gap-2'>
                     <p>Variation {index + 1}:</p>
                     <p>{item.weight} (kg)</p>
                     <p>x{item.quantity}</p>
                     <button
                        type='button'
                        className='bg-red-300  rounded-md text-white p-1'
                        onClick={() => handleRemoveVariation(item._id)}
                     >
                        Remove
                     </button>
                  </div>
               ))}
            </div>
         </div>
         <div className='w-full h-full min-h-[1.5rem] flex justify-between items-center gap-2'>
            <InputField title='Weight' type='number' getValues={handleGetValue} name='weight' />
            <InputField title='Quantity' type='number' getValues={handleGetValue} name='quantity' />
            <SelectField title='Vendor' getValues={handleGetValue} name='vendorId'>
               {vendors.map((item) => (
                  <SelectOption value={item._id} label={`${item.name} & ${item.origin}`} key={item._id} />
               ))}
            </SelectField>

            <button
               type='button'
               className='bg-greenCus text-white p-3 mt-5 rounded-lg font-semibold'
               onClick={handleAddInstance}
            >
               Add
            </button>
         </div>
      </div>
   );
};

export default MultiField;
