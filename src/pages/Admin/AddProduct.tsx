/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import productService from '../../api/product';
import categoryService from '../../api/category';
import { useState, useEffect } from 'react';
//import { uploadImage } from '../../api/upload';
import { InputProduct } from '../../common/product';
import { ICategory } from '../../common/category';
import Message from '../../components/Message/Message';
import Loading from '../../components/Loading/Loading';
//import { FileFormTarget, ProductFormCheck } from './UpdateProduct';
import FormSubmit, { FormResponse } from './components/FormSubmit';
import FormInputFeild from '../../components/InputFeild/InputFeild';
import { uploadImage } from '../../api/upload';
import { AxiosResponse } from 'axios';
import { formErrorsRespones } from './UpdateProduct';

const { InputFeild, SelectFeild, SelectOption, TextareaFeild } = FormInputFeild;

export type MessageProp = {
   content: string;
   type: 'error' | 'success' | 'warn';
};
const AddProduct = () => {
   const [categories, setCategories] = useState<ICategory[] | null>();
   const [loading, setLoading] = useState<boolean>(false);
   const [msg, setMsg] = useState<MessageProp>();
   // const [product, setProduct] = useState<InputProduct>({
   //    name: '',
   //    price: 0,
   //    stock: 0,
   //    solded: 0,
   //    discount: 0,
   //    favorite: 0,
   //    categoryId: '',
   //    desc: '',
   //    images: []
   // });
   const [errors, setErrors] = useState<Record<string, string | undefined> | InputProduct | null>();
   const getAllCategory4 = async () => {
      const { data } = await categoryService.getAllCategory();
      setCategories(data.data);
   };
   useEffect(() => {
      void (async () => {
         await getAllCategory4();
      })();
   }, []);

   const onhandleSubmit = ({ result, isValid, errs }: FormResponse<InputProduct>): void => {
      if (isValid) {
         setLoading(true);
         const formData = new FormData();
         for (const file of result.images) {
            formData.append('images', file as string);
         }
         void (async () => {
            const { data } = await uploadImage(formData);
            if (data.data.length > 0) {
               result.images = data.data as string;
               await productService
                  .addProduct(result)
                  .then(({ data }: AxiosResponse<formErrorsRespones>) => {
                     setLoading(false);
                     if (data?.errors && data?.errors?.length > 0) {
                        alert('faild in Backend');
                        return;
                     }
                     setMsg({ content: 'Create product successfully !', type: 'success' });
                  })
                  .catch(() => {
                     setLoading(false);
                     setMsg({ content: 'Create product fail !', type: 'error' });
                  });
            } else {
               errs.images = 'Ảnh lỗi';
               setErrors(errs);
            }
         })();
      } else {
         setErrors(errs);
      }
   };
   if (loading) return <Loading />;
   return (
      <div className='relative'>
         {msg && <Message msg={msg.content} type={msg.type} duration={1000} navigateLink='/admin/products' />}
         <div>
            <h2 className='text-4xl font-bold dark:text-white'>Add Product</h2>
         </div>
         <FormSubmit
            onSubmit={onhandleSubmit}
            haveFiles //If you have files submitted
            className='my-10'
            pattern={{
               name: { required: true, min: 3 },
               price: { required: true, min: 1, type: 'number' },
               stock: { required: true, type: 'number', min: 0 },
               discount: { required: true, type: 'number', min: 0 },
               categoryId: { required: true },
               desc: { required: true }
            }}
         >
            <div className='grid md:grid-cols-2 md:gap-6'>
               <div>
                  <InputFeild type='text' name='name' title='Product Name' />
                  <p className='text-sm text-red-400'>{errors?.name}</p>
               </div>
               <div>
                  <InputFeild type='number' name='price' title='Product Price' />
                  <p className='text-sm text-red-400'>{errors?.price}</p>
               </div>
               <div>
                  <InputFeild type='number' name='stock' title='Stock' />
                  <p className='text-sm text-red-400'>{errors?.stock}</p>
               </div>
               <div>
                  <InputFeild type='number' name='discount' title='Discount' />
                  <p className='text-sm text-red-400'>{errors?.discount}</p>
               </div>
               <div>
                  <SelectFeild name='categoryId' title='Selected Category'>
                     {categories &&
                        categories?.map((cate, index) => (
                           <SelectOption value={cate._id} label={cate.name} key={index} />
                        ))}
                  </SelectFeild>
                  <p className='text-sm text-red-400'>{errors?.categoryId}</p>
               </div>
               <div>
                  <InputFeild type='file' name='images' title='Images' multiple={true} />
                  <p className='text-sm text-red-400'>{errors?.images?.toString()}</p>
               </div>
            </div>
            <div>
               <TextareaFeild name='desc' title='desc' />
               <p className='text-sm text-red-400'>{errors?.desc}</p>
            </div>
            <button
               type='submit'
               className='text-white mt-2 bg-hightLigh hover:bg-hightLigh focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
               Submit
            </button>
         </FormSubmit>
      </div>
   );
};

export default AddProduct;
