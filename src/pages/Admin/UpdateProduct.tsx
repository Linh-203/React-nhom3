import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../../api/product';
import categoryService from '../../api/category';
import { useState, useEffect } from 'react';
import { uploadImage } from '../../api/upload';
import { IProduct, IVariation, InputProduct } from '../../common/product';
import { ICategory } from '../../common/category';
import FormInputField from '../../components/InputField/InputFeild';
import { MessageProp } from './AddProduct';
import Loading from '../../components/Loading/Loading';
import Message from '../../components/Message/Message';
import FormSubmit, { FormResponse } from './components/FormSubmit';
import { Image } from '../../common/image';
import { AxiosResponse } from 'axios';
import MultiField from './components/MultiField';

const { InputField, SelectField, SelectOption, TextareaField } = FormInputField;

export type ProductFormCheck = Omit<InputProduct, 'images'> & {
   categoryId: string;
};

export type FileFormTarget = React.FormEvent<HTMLFormElement> & {
   target: { files?: string | string[] | Image[] | undefined; value: string | number; name?: string }[];
};

export type formErrorsRespones = {
   errors?: string[];
   message?: string;
};

const UpdateProduct = () => {
   const { id } = useParams();

   const [msg, setMsg] = useState<MessageProp>();
   const [loading, setLoading] = useState<boolean>(false);
   const [categories, setCategories] = useState<ICategory[]>([]);
   const [product, setProduct] = useState<IProduct>({} as IProduct);
   const [errors, setErrors] = useState<Record<string, string | undefined> | ProductFormCheck | null>();
   const [variations, setVariations] = useState<IVariation[]>([]);
   const getAllCategory4 = async () => {
      const { data } = await categoryService.getAllCategory();
      setCategories(data.data);
   };
   useEffect(() => {
      void (async () => {
         await getAllCategory4();
      })();
   }, []);

   useEffect(() => {
      productService
         .getProductById(id!)
         .then(({ data }) => {
            setProduct(data.data);
            setVariations(data.data.variations.map((item) => ({ ...item, vendorId: item.vendorId?._id })));
         })
         .catch((err) => console.log(err));
   }, [id]);
   const onhandleSubmit = ({ result, isValid, errs }: FormResponse<InputProduct>): void => {
      //need to re-design useValidate
      if (variations.length === 0) {
         setErrors({ ...errs, variations: 'Create at least 1 variation please !' });
         return;
      }
      //get images in db
      let imagesUpload = product.images.map((img) => {
         img._id = undefined;
         return img;
      });
      if (isValid) {
         setLoading(true);
         void (async () => {
            //append file to form data
            if (result.images !== undefined) {
               const formData = new FormData();
               for (const file of result.images) {
                  formData.append('images', file as string);
               }
               const { data } = await uploadImage(formData);
               if (data.data.length > 0) {
                  imagesUpload = data.data as Image[];
               } else {
                  setMsg({ content: 'Fail to upload image', type: 'error' });
               }
            }
            result.images = imagesUpload as Image[];
            //transform data for submit update because FormSubmit need to re-design
            const transformResult = {
               ...result,
               variations,
               quantity: undefined,
               vendorId: undefined,
               weight: undefined
            };
            await productService
               .updateProduct(id!, transformResult)
               .then(({ data }: AxiosResponse<formErrorsRespones>) => {
                  setLoading(false);
                  if (data?.errors && data?.errors?.length > 0) {
                     alert('failed in Backend');
                     return;
                  }
                  setMsg({ content: 'Upadte product successfully !', type: 'success' });
               })
               .catch(() => {
                  setLoading(false);
                  setMsg({ content: 'Upadte product fail !', type: 'error' });
               });
         })();
      } else {
         setErrors(errs);
      }
   };
   const handleGetVariations = useCallback((value: IVariation[]) => {
      setVariations(value);
   }, []);
   if (loading) return <Loading />;
   return (
      <div>
         {msg && <Message msg={msg.content} type={msg.type} duration={2000} navigateLink='/admin/products' />}
         <div>
            <h2 className='text-4xl font-bold dark:text-white'>Update Product</h2>
         </div>
         {Object.keys(product).length > 0 && (
            <FormSubmit
               onSubmit={onhandleSubmit}
               className='my-10'
               pattern={{
                  name: { required: true },
                  price: { required: true, min: 1, type: 'number' },
                  stock: { required: true, type: 'number', min: 0 },
                  discount: { required: true, type: 'number', min: 0 },
                  categoryId: { required: true },
                  desc: { required: true },
                  variations: { required: true }
               }}
            >
               <h1>Current Image</h1>
               <img className='w-1/5 h-1/3' src={product?.images[0]?.url} alt='' />
               <div className='grid md:grid-cols-2 md:gap-6 mt-5'>
                  <div>
                     <InputField value={product.name} type='text' name='name' title='Product Name' />
                     <p className='text-sm text-red-400'>{errors?.name}</p>
                  </div>
                  <div>
                     <InputField value={product.price} type='number' name='price' title='Product Price' />
                     <p className='text-sm text-red-400'>{errors?.price}</p>
                  </div>
                  <div>
                     <InputField value={product.discount} type='number' name='discount' title='Discount' />
                     <p className='text-sm text-red-400'>{errors?.discount}</p>
                  </div>
                  <div>
                     <SelectField
                        value={product?.categoryId?._id as string}
                        firstValue={product?.categoryId?.name as string}
                        name='categoryId'
                        title='Selected Category'
                     >
                        {categories &&
                           categories?.map((cate, index) => (
                              <SelectOption value={cate._id} label={cate.name} key={index} />
                           ))}
                     </SelectField>
                     <p className='text-sm text-red-400'>{errors?.categoryId}</p>
                  </div>
                  <div>
                     <InputField type='file' name='images' title='Images' multiple={true} />
                  </div>
               </div>{' '}
               <div className='mt-5'>
                  <p className='font-semibold text-sm'>Create Variation:</p>
                  <MultiField<IVariation> getValues={handleGetVariations} defaultValue={variations} />
                  <p className='text-sm text-red-400'>{errors?.variations as string}</p>
               </div>
               <div>
                  <TextareaField name='desc' value={product?.desc} title='desc' />
                  <p className='text-sm text-red-400'>{errors?.desc}</p>
               </div>
               <button
                  type='submit'
                  className='text-white mt-2 bg-hightLigh hover:bg-hightLigh focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
               >
                  Submit
               </button>
            </FormSubmit>
         )}
      </div>
   );
};

export default UpdateProduct;
