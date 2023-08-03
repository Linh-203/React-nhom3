import { useState, useEffect } from 'react';
import productService from '../../api/product';
import { IProduct } from '../../common/product';
type IProps = {
   id: string;
};
function ProductDetail(props: IProps) {
   const [item, setItem] = useState<IProduct>({} as IProduct);
   const [loading, setLoading] = useState<boolean>(true);

   const getItem = async () => {
      const { data } = await productService.getProductById(props.id);
      setItem(data.data);
      setLoading(false);
   };

   useEffect(() => {
      if (props.id !== '') {
         setLoading(true);
         getItem().catch(() => {
            console.log('getItem failed');
         });
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [props.id]);

   return (
      <div className='text-black'>
         {loading && Object.keys(item)?.length == 0 ? (
            <div className='border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto'>
               <div className='animate-pulse flex space-x-4'>
                  <div className='rounded-full bg-slate-200 h-10 w-10'></div>
                  <div className='flex-1 space-y-6 py-1'>
                     <div className='h-2 bg-slate-200 rounded'></div>
                     <div className='space-y-3'>
                        <div className='grid grid-cols-3 gap-4'>
                           <div className='h-2 bg-slate-200 rounded col-span-2'></div>
                           <div className='h-2 bg-slate-200 rounded col-span-1'></div>
                        </div>
                        <div className='h-2 bg-slate-200 rounded'></div>
                     </div>
                  </div>
               </div>
            </div>
         ) : (
            <div>
               <div className='flex flex-wrap items-center gap-9 h-[400px]'>
                  <div className='w-[400px] h-[400px]'>
                     <img className='rounded-2xl w-full h-full object-cover' src={item?.images[0]?.url} alt='' />
                  </div>
                  <div className='flex-1 h-full'>
                     <h1 className='font-bold text-[20px]'>Product Info</h1>
                     <table className='w-full my-5'>
                        <tbody>
                           <tr className='w-full border-b-[1px] border-black'>
                              <td className='py-2'>
                                 <h1>Price</h1>
                              </td>
                              <td>${item?.price}</td>
                           </tr>
                           <tr className='w-full border-b-[1px] border-black'>
                              <td className='py-2'>
                                 <h1>Quantity</h1>
                              </td>
                              <td>{item?.stock}</td>
                           </tr>
                           <tr className='w-full border-b-[1px] border-black'>
                              <td className='py-2'>
                                 <h1>Category</h1>
                              </td>
                              <td>{item?.categoryId?.name}</td>
                           </tr>
                        </tbody>
                     </table>
                     <h1 className='py-3 font-bold text-[20px]'>Product Description</h1>
                     <p className='w-full'>{item?.desc}</p>
                  </div>
                  <div className='w-full'>
                     <div className='w-[400px]'>
                        <h1>
                           Favorite: <span>{item?.favorite}</span>
                        </h1>
                        <h1>
                           Solded: <span>{item?.solded}</span>
                        </h1>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

export default ProductDetail;
