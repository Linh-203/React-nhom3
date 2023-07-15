import { useState, useEffect } from 'react';
import productService from '../../api/product';
type IProps = {
   id: string;
   setID(): void;
};
function ProductDetail(props: IProps) {
   const [item, setItem] = useState<any>({});
   const [loading, setLoading] = useState<boolean>(true);
   const [toggle, setToggle] = useState<boolean>(false);

   const getItem = async () => {
        const res = await productService.getProductById(props.id);
        console.log(res.data[0]);
        setItem(res.data[0]);
        setLoading(false);
   };

   const handleCloseTotal = () => {
      props.setID();
   };

   useEffect(() => {
        setLoading(true);
        setToggle(true);
        getItem().catch(() => {
            console.log('getItem failed');
        });
   }, [props.id]);
   
   return (
      <div
         className={`fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] flex items-center transition-all justify-center ${
            toggle ? 'top-0' : '-top-[100%]'
         }`}
      >
         <div className='w-[80%] h-[90%] rounded-2xl bg-white p-5'>
            <div className='flex pb-4 justify-between items-center'>
               <h1 className='text-4xl font-bold'>Product Detail</h1>
               <button onClick={handleCloseTotal} className='text-white p-2 rounded-lg bg-red-400 hover:bg-red-500'>
                  Close
               </button>
            </div>
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
                  <div className='flex items-center gap-9 h-[400px]'>
                      <div className='w-[400px] h-[400px]'>
                        <img className='w-full h-full object-cover' src={item!.images[0]!.url} alt="" />
                      </div>
                      <div className='flex-1 h-full'>
                        <h1 className='font-bold text-[20px]'>Product Info</h1>
                        
                      </div>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}

export default ProductDetail;
