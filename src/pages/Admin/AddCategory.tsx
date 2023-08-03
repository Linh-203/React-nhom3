import { useState } from 'react';
import { createCate } from '../../api/category';
import { uploadImage } from '../../api/upload';
import { MessageProp } from './AddProduct';
import Message from '../../components/Message/Message';
import Loading from '../../components/Loading/Loading';

const AddCategory = () => {
   const [cateName, setCateName] = useState('');
   const [cateNameErr, setCateNameErr] = useState(false);
   const [loading, setLoading] = useState<boolean>(false);
   const [msg, setMsg] = useState<MessageProp>();

   const onChangeName = (e: any) => {
      const value = e.target.value;
      setCateName(e.target.value);
      onBlurName(value);
   };
   const onBlurName = (value: string) => {
      if (value.length <= 0) {
         setCateNameErr(true);
      } else {
         setCateNameErr(false);
      }
   };

   const onSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (cateName.length === 0) {
         setCateNameErr(true);
         return;
      }

      const fileList = e.target[1].files;
      const formData = new FormData();
      for (const file of fileList) {
         formData.append('images', file);
      }
      setLoading(true);
      const res = await uploadImage(formData);
      const data = {
         name: cateName,
         image: res.data.data[0].url
      };
      await createCate(data)
         .then(() => {
            setLoading(false);
            setMsg({ content: 'Create category successfully !', type: 'success' });
         })
         .catch(() => {
            setLoading(false);
            setMsg({ content: 'Fail to create category !', type: 'error' });
         });
   };
   if (loading) return <Loading />;
   return (
      <div>
         {msg && <Message msg={msg.content} type={msg.type} duration={1000} navigateLink='/admin/categories' />}
         <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
               <img
                  className='mx-auto h-10 w-auto'
                  src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                  alt='Your Company'
               />
               <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                  AddCategory
               </h2>
            </div>

            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
               <form className='space-y-6' action='#' method='POST' onSubmit={onSubmit}>
                  <div>
                     <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
                        CategoryName
                     </label>
                     <div className='mt-2'>
                        <input
                           id='email'
                           name='name'
                           type='text'
                           onChange={onChangeName}
                           onBlur={() => onBlurName(cateName)}
                           className='p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                     </div>
                     <p style={{ color: '#f12' }}>{cateNameErr ? 'This is required' : ''}</p>
                  </div>

                  <div>
                     <div className='flex items-center justify-between'>
                        <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
                           Image
                        </label>
                     </div>
                     <div className='mt-2'>
                        <input
                           id='password'
                           name='image'
                           type='file'
                           className='p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        />
                     </div>
                  </div>

                  <div>
                     <button
                        type='submit'
                        className='flex w-full justify-center rounded-md bg-hightLigh hover:bg-hightLigh px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                     >
                        Submit
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default AddCategory;