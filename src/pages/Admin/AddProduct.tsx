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
import FormSubmit from './components/FormSubmit';
import FormInputFeild from '../../components/InputFeild/InputFeild';
import { Image } from '../../common/image';
import { uploadImage } from '../../api/upload';

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

   // const onHandleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
   //    if (e) {
   //       const { name, value } = e.target;
   //       setProduct({ ...product, [name]: value });
   //    }
   // };

   // function validateFields(
   //    item: Record<string, string | number>
   // ): [boolean, InputProduct | Record<string, string | undefined>] {
   //    let isValid = true;
   //    const errs: InputProduct | Record<string, string | undefined> = {};
   //    for (const key in item) {
   //       if (item[key].toString().trim() === '' || item[key] == undefined || (item[key] == 0 && key == 'price')) {
   //          errs[key] = 'Hãy nhập ' + key;
   //          isValid = false;
   //       } else {
   //          errs[key] = undefined;
   //       }
   //    }
   //    return [isValid, errs];
   // }

   const onhandleSubmit = (
      result: Record<string, string | number | Image[]> | InputProduct,
      isValid: boolean,
      errs: Record<string, string | number | undefined> | InputProduct
   ): void => {
      if (isValid) {
         setLoading(true);
         const formData = new FormData();
         for (const file of result.images as string[]) {
            formData.append('images', file);
         }
         void (async () => {
            const { data } = await uploadImage(formData);
            if (data.data.length > 0) {
               result.images = data.data as string;
               productService.addProduct(result as InputProduct)
            .then(() => {
               setLoading(false);
               setMsg({ content: 'Create product successfully !', type: 'success' });
            })
            .catch(() => {
               setLoading(false);
               setMsg({ content: 'Create product fail !', type: 'error' });
            });
            } else {
               errs.images = 'Ảnh lỗi'
               setErrors(errs as InputProduct)
            }
         })();
         
      } else {
         setErrors(errs as InputProduct);
      }

      // e.preventDefault();
      // const [isValid, errs] = validateFields(product as ProductFormCheck);
      // let formValid = isValid;
      // if (e.target[7].files.length == 0) {
      //    formValid = false;
      //    errs.images = 'Hãy chọn ảnh';
      // }
      // console.log(formValid);

      // if (formValid) {
      //    setLoading(true);
      //    void (async () => {
      //       const fileList = e.target[7].files;
      //       const formData = new FormData();
      //       for (const file of fileList) {
      //          formData.append('images', file);
      //       }
      //       const { data } = await uploadImage(formData);
      //       if (data.data?.length > 0) {
      //          const item = {
      //             name: product.name,
      //             price: product.price,
      //             stock: product.stock,
      //             solded: product.solded,
      //             discount: product.discount,
      //             favorite: product.favorite,
      //             categoryId: product.categoryId,
      //             images: data.data,
      //             desc: product.desc
      //          };
      //          await onHandleAdd(item);
      //          setLoading(false);
      //          setMsg({ content: 'Create product successfully !', type: 'success' });
      //       } else {
      //          setLoading(false);
      //          setMsg({ content: 'Fail to create product', type: 'error' });
      //       }
      //    })();
      // } else {
      //    setLoading(false);
      //    setErrors({ ...errs });
      // }
   };
   if (loading) return <Loading />;
   return (
      <div className='relative'>
         {msg && <Message msg={msg.content} type={msg.type} duration={1000} navigateLink='/admin/products' />}
         <div>
            <h2 className='text-4xl font-bold dark:text-white'>Add Product</h2>
         </div>
         <FormSubmit onSubmit={onhandleSubmit} haveFiles className='my-10'>
            <div className='grid md:grid-cols-2 md:gap-6'>
              <div>
                  <InputFeild type='text' name='name' title='Product Name'  />
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
                  <InputFeild type='number' name='solded' title='Solded' />
                  <p className='text-sm text-red-400'>{errors?.solded}</p>
               </div>
               <div>
                  <InputFeild type='number' name='discount' title='Discount' />
                  <p className='text-sm text-red-400'>{errors?.discount}</p>
               </div>
               <div>
                  <InputFeild type='number' name='favorite' title='Favorite' />
                  <p className='text-sm text-red-400'>{errors?.favorite}</p>
               </div>
              <div>
                  <SelectFeild name='categoryId' title='Selected Category'>
                     {categories &&
                        categories?.map((cate, index) => <SelectOption value={cate._id} label={cate.name} key={index} />)}
                  </SelectFeild>
                  <p className='text-sm text-red-400'>{errors?.categoryId}</p>
              </div>
               <div>
                  <InputFeild type='file' name='images' title='Images' multiple={true}  />
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
