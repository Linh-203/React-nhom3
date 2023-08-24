import { useEffect, useState } from 'react';
import { IProduct } from '../../common/product';
import Loading from '../../components/Loading/Loading';
import { getProductById } from '../../api/product';

type Props = {
   id: string;
   recall: boolean;
};

const ListVariation = ({ id, recall }: Props) => {
   const [loading, setLoading] = useState<boolean>(false);
   const [product, setProduct] = useState<IProduct>({} as IProduct);
   console.log(product);
   useEffect(() => {
      void (async () => {
         try {
            setLoading(true);
            const { data } = await getProductById(id);
            setProduct(data.data);
            setLoading(false);
         } catch (error) {
            setLoading(false);
            console.log(error);
         }
      })();
   }, [recall, id]);
   if (loading) return <Loading />;
   return (
      <div className='mt-10'>
         <p className='text-lg'>
            Variations of <span className='italic font-semibold'>{product.name}</span>
         </p>
         <table className='w-full mt-10' border={1}>
            <thead >
               <th className='uppercase text-sm border-[1px] p-2 text-white bg-orange-400'>stt</th>
               <th className='uppercase text-sm border-[1px] p-2 text-white bg-orange-400'>weight (kg)</th>
               <th className='uppercase text-sm border-[1px] p-2 text-white bg-orange-400'>vendor</th>
               <th className='uppercase text-sm border-[1px] p-2 text-white bg-orange-400'>quantity</th>
               <th className='uppercase text-sm border-[1px] p-2 text-white bg-orange-400'>action</th>
            </thead>
            <tbody>
               {product.variations &&
                  product?.variations?.map((item, index) => (
                     <tr key={item._id} className='border-[1px] font-normal text-colorText'>
                        <th>{index + 1}</th>
                        <th>{item.weight}</th>
                        <th>
                           {item.vendorId.name} & {item.vendorId.origin}
                        </th>
                        <th>{item.quantity}</th>
                     </tr>
                  ))}
            </tbody>
         </table>
         {product.variations && product?.variations.length === 0 && (
            <h3 className='text-center mt-10 text-2xl'>Data empty</h3>
         )}
      </div>
   );
};

export default ListVariation;
