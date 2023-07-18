import { Link } from 'react-router-dom';
import Portal from '../Portal/PortalOfDang';
import ProductDetail from '../../pages/Admin/ProductDetail';
import { useState } from 'react';
import { IProduct } from '../../common/product';
type IProps = {
   prd: IProduct;
   index: number;
   deleteAction(id: string): Promise<void>;
};

function ProductTbaleItem({ prd, index, deleteAction }: IProps) {
   const [toggle, setToggle] = useState<boolean>(false);

   const deleteItem = async (id: string):Promise<void> => {
      await deleteAction(id)
   }

   return (
      <tr className='active:bg-primaryBg border-b-[1px] border-gray-400 h-[160px]'>
         <th className='p-2' scope='col'>
            {index + 1}
         </th>
         <th className='p-2' scope='col'>
            <img src={prd.images[0]?.url} className='rounded-2xl w-52 h-36 mx-auto' alt='' />
         </th>
         <th className='p-2' scope='col'>
            {prd?.name}
         </th>
         <th className='p-2' scope='col'>
            {prd?.price}
         </th>
         <th className='p-2' scope='col'>
            {prd?.stock}
         </th>
         <th className='p-2 flex gap-2 justify-center items-center h-[160px]' scope='col'>
            <button
               onClick={() => setToggle((prev) => !prev)}
               className='p-2 rounded-xl bg-green-400 hover:bg-green-500 text-[15px] text-white'
            >
               Detail
            </button>
            <Portal title={'Product Detail'} toggle={toggle}>
               <div className='flex pb-4 justify-between items-center'>
                  <h1 className='text-4xl font-bold'>ProductDetail</h1>
                  <button
                     onClick={() => setToggle(false)}
                     className='text-white p-2 rounded-lg bg-red-400 hover:bg-red-500'
                  >
                     Close
                  </button>
               </div>
               <ProductDetail id={prd?._id} />
            </Portal>
            <Link className='p-2 rounded-xl bg-blue-400 hover:bg-blue-500 text-[15px] text-white' to={'/admin/product-update/' + prd?._id }>
               Update
            </Link>
            <button
               // eslint-disable-next-line @typescript-eslint/no-misused-promises
               onClick={() => deleteItem(prd?._id)}
               className='p-2 rounded-xl bg-red-400 hover:bg-red-500 text-[15px] text-white'
            >
               Delete
            </button>
         </th>
      </tr>
   );
}

export default ProductTbaleItem;
