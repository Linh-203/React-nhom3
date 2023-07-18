import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import productService from '../../api/product';
import categoryService from '../../api/category';
import { useState, useEffect } from 'react';
import { uploadImage } from '../../api/upload';
import { IProduct, InputProduct } from '../../common/product';
import { ICategory } from '../../common/category';

const UpdateProduct = () => {
   const navigate = useNavigate();
   const { id } = useParams();
   console.log(id);

   const [categories, setCategories] = useState<ICategory[]>([]);
   const [product, setProduct] = useState<IProduct>({} as IProduct);
   const [errors, setErrors] = useState({});

   const getAllCategory4 = async () => {
      const {data} = await categoryService.getAllCategory();
      setCategories(data);
   };
   useEffect(() => {
      void (async () => {
         await getAllCategory4();
      })();
   }, []);
   console.log(categories, product);

   useEffect(() => {
      productService
         .getProductById(id!)
         .then(({ data }) => {
            console.log(data);
            setProduct(data.data);
         })
         .catch((err) => console.log(err));
   }, [id]);

   const onHandleUpdate = async (product: InputProduct) => {
      await productService
         .updateProduct(id!, product)
         .then(() => {
            //  productService.getAllProduct.then(({ data }) => setProduct(data));
            navigate('/admin/products');
         })
         .catch(({ response }) => alert());
   };

   function validateFields(item) {
      console.log(item);

      let isValid = true;
      const errs = {};
      for (const key in item) {
         if (item[key] === '' || item[key] == undefined) {
            errs[key] = 'Hãy nhập ' + key;
            isValid = false;
         } else {
            errs[key] = undefined;
         }
      }

      return [isValid, errs];
   }

   const onHandleChange = (e) => {
      const { name, value } = e.target;
      setProduct({ ...product, [name]: value });
   };

   const onhandleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      let [isValid, errs] = validateFields(product);
      let images = product.images.map((img) => {
         img._id = undefined;
         return img;
      });
      if (e.target[7].files.length > 0) {
         const fileList = e.target[7].files;
         const formData = new FormData();
         for (const file of fileList) {
            formData.append('images', file);
         }

         const { data } = await uploadImage(formData);
         if (data.data.length > 0) {
            images = data.data;
            console.log(data.data);
         } else {
            alert('Fail to upload image');
         }
      }
      if (isValid) {
         const item = {
            name: product.name,
            price: product.price,
            stock: product.stock,
            solded: product.solded,
            discount: product.discount,
            favorite: product.favorite,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            categoryId: product.categoryId._id ? product.categoryId._id : product.categoryId,
            images: images,
            desc: product.desc
         };

         onHandleUpdate(item);
      } else {
         setErrors({ ...errs });
      }
   };
   console.log(errors);

   return (
      <div>
         <div>
            <h2 className='text-4xl font-bold dark:text-white'>Update Product</h2>
         </div>
         {Object.keys(product).length > 0 && (
            <form onSubmit={onhandleSubmit}>
               <div>
                  <h4>Current Image</h4>
                  <img src={product?.images[0]?.url} alt="Image" className='w-96'/>
               </div>
               <div className='grid md:grid-cols-2 md:gap-6'>
                  <div className='relative z-0 w-full mb-6 group'>
                     <input
                        onChange={(e) => onHandleChange(e)}
                        value={product?.name}
                        type='text'
                        name='name'
                        id='name'
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        placeholder=' '
                     />
                     <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                        Product name
                     </label>
                     <p className='text-red-400'>{errors.name}</p>
                  </div>
                  <div className='relative z-0 w-full mb-6 group'>
                     <input
                        onChange={(e) => onHandleChange(e)}
                        value={product?.price}
                        type='number'
                        name='price'
                        id='price'
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        placeholder=' '
                     />
                     <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                        Price
                     </label>
                     <p className='text-red-400'>{errors.price}</p>
                  </div>
               </div>

               <div className='grid md:grid-cols-2 md:gap-6'>
                  <div className='relative z-0 w-full mb-6 group'>
                     <input
                        onChange={(e) => onHandleChange(e)}
                        value={product?.stock}
                        type='number'
                        name='stock'
                        id='stock'
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        placeholder=' '
                     />
                     <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                        Stock
                     </label>
                     <p className='text-red-400'>{errors.stock}</p>
                  </div>
                  <div className='relative z-0 w-full mb-6 group'>
                     <input
                        onChange={(e) => onHandleChange(e)}
                        min={0}
                        value={product?.solded}
                        type='number'
                        name='solded'
                        id='solded'
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        placeholder=' '
                     />
                     <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                        Sold_out
                     </label>
                     <p className='text-red-400'>{errors.solded}</p>
                  </div>
               </div>

               <div className='grid md:grid-cols-2 md:gap-6'>
                  <div className='relative z-0 w-full mb-6 group'>
                     <input
                        onChange={(e) => onHandleChange(e)}
                        value={product?.discount}
                        type='number'
                        name='discount'
                        id='discount'
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        placeholder=' '
                     />
                     <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                        Discount
                     </label>
                     <p className='text-red-400'>{errors.discount}</p>
                  </div>
                  <div className='relative z-0 w-full mb-6 group'>
                     <input
                        onChange={(e) => onHandleChange(e)}
                        value={product?.favorite}
                        type='number'
                        name='favorite'
                        id='favorite'
                        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        placeholder=' '
                     />
                     <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                        Favorite
                     </label>
                     <p className='text-red-400'>{errors.favorite}</p>
                  </div>
               </div>

               <div className='grid md:grid-cols-2 md:gap-6'>
                  <div className='relative z-0 w-full mb-6 group'>
                     <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                        Select an category
                     </label>
                     <select
                        onChange={(e) => onHandleChange(e)}
                        name='categoryId'
                        id='categoryId'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                     >
                        <option selected value={product?.categoryId?._id}>
                           {product?.categoryId?.name}
                        </option>

                        {categories?.length > 0 &&
                           categories.map((cate, index) => (
                              <option key={index} value={cate._id}>
                                 {cate.name}
                              </option>
                           ))}
                     </select>
                     <p className='text-red-400'>{errors.categoryId}</p>
                  </div>

                  <div className='relative z-0 w-full mb-6 group'>
                     <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Upload file</label>
                     <input
                        id='images'
                        name='images'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        aria-describedby='file_input_help'
                        multiple
                        type='file'
                     />
                  </div>
               </div>

               <div className='w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-800'>
                  <div className='px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800'>
                     <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Description</label>
                     <textarea
                        id='desc'
                        name='desc'
                        value={product?.desc}
                        onChange={(e) => onHandleChange(e)}
                        className='w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400'
                        placeholder='Write a desc...'
                     ></textarea>
                  </div>
                  <p className='text-red-400'>{errors.desc}</p>
               </div>

               <button
                  type='submit'
                  className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
               >
                  Submit
               </button>
            </form>
         )}
      </div>
   );
};

export default UpdateProduct;
