import { useState, useEffect } from 'react';
import { ICategory } from '../../common/category';
    import { getCategoryById } from '../../api/category';
    type IProps = {
   id: string;
};
function CategoryDetail(props: IProps) {
   const [item, setItem] = useState<ICategory>({});
   const [loading, setLoading] = useState<boolean>(true);

   const getItem = async () => {
      const {data} = await getCategoryById(props.id);
      setItem(data?.category);
      setLoading(false);
   };

   useEffect(() => {
      console.log(props.id);

      if (props.id !== '') {
         setLoading(true);
         getItem().catch(() => {
            console.log('getItem failed');
         });
      }
   }, [props.id]);
   //console.log(item, toggle, props.id);
console.log(item);

   return (
      <div className='text-black'>
         {loading && Object.keys(item).length == 0 ? (
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
                     <img className='rounded-2xl w-full h-full object-cover' src={item?.image} alt='' />
                  </div>
                  <div className='flex-1 h-full'>
                     <h1 className='font-bold text-[20px]'>Category Info</h1>
                     <table className='w-full my-5'>
                        <tbody>
                           <tr className='w-full border-b-[1px] border-black'>
                              <td className='py-2'>
                                 <h1>Name</h1>
                              </td>
                              <td>{item?.name}</td>
                           </tr>
                           <tr className='w-full border-b-[1px] border-black'>
                              <td className='py-2'>
                                 <h1>Item</h1>
                              </td>
                              <td>{item?.products?.length}</td>
                           </tr>
                           </tbody>
                        </table>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

export default CategoryDetail;
