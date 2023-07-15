import { useNavigate } from 'react-router-dom';
import addProduct from '../Admin/AddCategory';
const AddProduct = () => {
   const navigate = useNavigate();

   const onhandleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
         await addProduct();
         navigate('/admin/products');
      } catch (error: any) {
         return;
      }
   };
   return (
      <div>
         <div>
            <h2 className='text-4xl font-bold dark:text-white'>Add Product</h2>
         </div>
         <form onSubmit={onhandleSubmit}>
            <div className='grid md:grid-cols-2 md:gap-6'>
               <div className='relative z-0 w-full mb-6 group'>
                  <input
                     type='text'
                     name='floating_first_name'
                     id='floating_first_name'
                     className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                     placeholder=' '
                     required
                  />
                  <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                     Product name
                  </label>
               </div>
               <div className='relative z-0 w-full mb-6 group'>
                  <input
                     type='number'
                     name='floating_last_name'
                     id='floating_last_name'
                     className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                     placeholder=' '
                     required
                  />
                  <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                     Price
                  </label>
               </div>
            </div>

            <div className='grid md:grid-cols-2 md:gap-6'>
               <div className='relative z-0 w-full mb-6 group'>
                  <input
                     type='number'
                     className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                     placeholder=' '
                     required
                  />
                  <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                     Stock
                  </label>
               </div>
               <div className='relative z-0 w-full mb-6 group'>
                  <input
                     min={0}
                     type='number'
                     name='floating_company'
                     id='floating_company'
                     className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                     placeholder=' '
                     required
                  />
                  <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                     Sold_out
                  </label>
               </div>
            </div>

            <div className='grid md:grid-cols-2 md:gap-6'>
               <div className='relative z-0 w-full mb-6 group'>
                  <input
                     type='number'
                     name='floating_company'
                     id='floating_company'
                     className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                     placeholder=' '
                     required
                  />
                  <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                     Discount
                  </label>
               </div>
            </div>

            <div className='grid md:grid-cols-2 md:gap-6'>
               <div className='relative z-0 w-full mb-6 group'>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                     Select an option
                  </label>
                  <select
                     id='countries'
                     className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  >
                     <option selected>Choose a country</option>
                     <option value='US'>United States</option>
                     <option value='CA'>Canada</option>
                     <option value='FR'>France</option>
                     <option value='DE'>Germany</option>
                  </select>
               </div>

               <div className='relative z-0 w-full mb-6 group'>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Upload file</label>
                  <input
                     className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                     aria-describedby='file_input_help'
                     id='file_input'
                     type='file'
                  />
               </div>
            </div>

            <div className='w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-800'>
               <div className='px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800'>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Description</label>
                  <textarea
                     id='comment'
                     className='w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400'
                     placeholder='Write a desc...'
                     required
                  ></textarea>
               </div>
            </div>

            <button
               type='submit'
               className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
               Submit
            </button>
         </form>
      </div>
   );
};

export default AddProduct;
