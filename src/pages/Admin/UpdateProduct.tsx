import React from 'react';
import { useParams } from 'react-router-dom';
import productService from '../../api/product';
import categoryService from '../../api/category';
import { useState, useEffect } from 'react';
import { uploadImage } from '../../api/upload';
import { IProduct, InputProduct } from '../../common/product';
import { ICategory } from '../../common/category';
import FormInputFeild from '../../components/InputFeild/InputFeild';
import { MessageProp } from './AddProduct';
import Loading from '../../components/Loading/Loading';
import Message from '../../components/Message/Message';
import FormSubmit from './components/FormSubmit';
import { Image } from '../../common/image';

const { InputFeild, SelectFeild, SelectOption, TextareaFeild } = FormInputFeild;

export type ProductFormCheck = Omit<InputProduct, 'images'> & {
   categoryId: string;
};

export type FileFormTarget = React.FormEvent<HTMLFormElement> & {
   target: { files?: string | string[] | undefined; value: string | number; name?: string }[];
};

const UpdateProduct = () => {
   const { id } = useParams();

   const [msg, setMsg] = useState<MessageProp>();
   const [loading, setLoading] = useState<boolean>(false);
   const [categories, setCategories] = useState<ICategory[]>([]);
   const [product, setProduct] = useState<IProduct>({} as IProduct);
   const [errors, setErrors] = useState<Record<string, string | undefined> | ProductFormCheck | null>();

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
         })
         .catch((err) => console.log(err));
   }, [id]);

   // const onHandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
   //    const { name, value } = e.target;
   //    setProduct({ ...product, [name]: value });
   // };

   const onhandleSubmit = (
      result: Record<string, string | number | Image[] | string[]> | InputProduct,
      isValid: boolean,
      errs: Record<string, string | number | undefined> | InputProduct
   ): void => {
      console.log(isValid, errs);

      let imagesUpload = product.images.map((img) => {
         img._id = undefined;
         return img;
      });
      if (isValid) {
         setLoading(true);
         void (async () => {
            if (result.images !== undefined) {
               const formData = new FormData();
               for (const file of result.images as string[]) {
                  formData.append('images', file);
               }
               const { data } = await uploadImage(formData);
               if (data.data.length > 0) {
                  imagesUpload = data.data as Image[];
               } else {
                  setMsg({ content: 'Fail to upload image', type: 'error' });
               }
            }
            result.images = imagesUpload as Image[];
            await productService
               .updateProduct(id!, result as InputProduct)
               .then(({data}: any) => {
                  setLoading(false);
                  if (data?.errors && data?.errors?.length > 0) {
                     alert('faild in Backend')
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
         setErrors(errs as InputProduct);
      }
   };
   if (loading) return <Loading />;
   return (
      <div>
         {msg && <Message msg={msg.content} type={msg.type} duration={1000} navigateLink='/admin/products' />}
         <div>
            <h2 className='text-4xl font-bold dark:text-white'>Update Product</h2>
         </div>
         {Object.keys(product).length > 0 && (
            <FormSubmit onSubmit={onhandleSubmit} className='my-10'>
               <h1>Current Image</h1>
               <img className='w-1/5 h-1/3' src={product?.images[0]?.url} alt='' />
               <div className='grid md:grid-cols-2 md:gap-6'>
                  <div>
                     <InputFeild value={product.name} type='text' name='name' title='Product Name' />
                     <p className='text-sm text-red-400'>{errors?.name}</p>
                  </div>
                  <div>
                     <InputFeild value={product.price} type='number' name='price' title='Product Price' />
                     <p className='text-sm text-red-400'>{errors?.price}</p>
                  </div>
                  <div>
                     <InputFeild value={product.stock} type='number' name='stock' title='Stock' />
                     <p className='text-sm text-red-400'>{errors?.stock}</p>
                  </div>
                  <div>
                     <InputFeild value={product.discount} type='number' name='discount' title='Discount' />
                     <p className='text-sm text-red-400'>{errors?.discount}</p>
                  </div>
                  <div>
                     <SelectFeild
                        value={product?.categoryId?._id as string}
                        firstValue={product?.categoryId?.name as string}
                        name='categoryId'
                        title='Selected Category'
                     >
                        {categories &&
                           categories?.map((cate, index) => (
                              <SelectOption value={cate._id} label={cate.name} key={index} />
                           ))}
                     </SelectFeild>
                     <p className='text-sm text-red-400'>{errors?.categoryId}</p>
                  </div>
                  <div>
                     <InputFeild type='file' name='images' title='Images' multiple={true} />
                  </div>
               </div>
               <div>
                  <TextareaFeild name='desc' value={product?.desc} title='desc' />
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
