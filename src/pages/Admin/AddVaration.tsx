import { useEffect, useState } from 'react';
import FormSubmit, { FormResponse } from './components/FormSubmit';
import { IVariation, IVendor } from '../../common/product';
import FormInputField from '../../components/InputField/InputFeild';
import { useParams } from 'react-router-dom';
import { getAllVendor } from '../../api/vendor';
import Loading from '../../components/Loading/Loading';

import ListVariation from './ListVariation';
import { addVariation } from '../../api/variation';

const { InputField, SelectField, SelectOption } = FormInputField;
const AddVaration = () => {
   const [loading, setLoading] = useState<boolean>(false);
   const [vendors, setVendors] = useState<IVendor[]>([]);
   const [needReCall, setNeedReCall] = useState<boolean>(false);
   const [errors, setErrors] = useState<Record<string, string | undefined> | IVariation | null>();
   const { id } = useParams();
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
   const onHandleSubmit = async ({ result, isValid, errs }: FormResponse<Omit<IVariation, '_id'>>): void => {
    console.log(errs)
      if (isValid) {
         setLoading(true);
         try {
            await addVariation({ ...result, productId: id! });
            setLoading(false);
            setNeedReCall(!needReCall);
         } catch (error) {
            setLoading(false);
            console.log(error);
         }
      }
      if (errs) setErrors(errs);
   };
   if (loading) return <Loading screen='large' />;
   return (
      <div>
         <div>
            <h2 className='text-4xl font-bold dark:text-white'>Add Variation</h2>
         </div>
         <FormSubmit
            onSubmit={onHandleSubmit}
            className='flex flex-col justify-start w-full gap-5 items-start mt-12'
            pattern={{ weight: { required: true }, quantity: { required: true }, vendorId: { required: true } }}
         >
          <div className='flex justify-start gap-5'>
                <div className='flex flex-col items-start gap-2'>
                   {' '}
                   <InputField type='number' title='Weight (kg)' name='weight' />
                   <p className='text-sm text-red-400'>{errors?.weight}</p>
                </div>
                <div className='flex flex-col items-start gap-2'>
                   {' '}
                   <InputField type='number' title='Quantity' name='quantity' />
                   <p className='text-sm text-red-400'>{errors?.quantity}</p>
                </div>
                <div className='flex flex-col items-start gap-2'>
                   <SelectField firstValue='Select vendor' title='Vendor' name='vendorId'>
                      {vendors.map((item) => (
                         <SelectOption value={item._id} key={item._id} label={`${item.name} & ${item.origin}`} />
                      ))}
                   </SelectField>
                   <p className='text-sm text-red-400'>{errors?.vendorId as string}</p>
                </div>
          </div>
            <button
            type='submit'
            className='text-white mt-2 bg-hightLigh hover:bg-hightLigh focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
         >
            Submit
         </button>
         </FormSubmit>
         
         <ListVariation id={id as string} recall={needReCall} />
      </div>
   );
};

export default AddVaration;
